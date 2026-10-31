import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";
import dotenv from "dotenv";

dotenv.config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (filePath) => {
  if (!filePath) return null;

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "users",
      resource_type: "image",
    });

    console.log("Cloudinary upload successful:", result.secure_url);

    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error.message);
    throw error;
  } finally {
    try {
      await fs.unlink(filePath);
    } catch (error) {
      if (error.code !== "ENOENT") {
        console.error("File cleanup failed:", error.message);
      }
    }
  }
};

export default uploadImage;
