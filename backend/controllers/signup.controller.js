
import uploadImage from "../config/cloudonary.js";
import generateToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      userName,
    } = req.body || {};

    // Validate required fields
    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !password ||
      !userName?.trim()
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Validate password
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long",
      });
    }

    // Normalize input
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedUserName = userName.trim().toLowerCase();

    // Check existing user
    const existingUser = await User.findOne({
      $or: [
        { email: normalizedEmail },
        { userName: normalizedUserName },
      ],
    });

    if (existingUser) {
      return res.status(409).json({
        message:
          existingUser.email === normalizedEmail
            ? "Email already exists"
            : "Username already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Upload image to Cloudinary
    let profileImage = "";

    if (req.file?.path) {
      profileImage = await uploadImage(req.file.path);

      if (!profileImage) {
        return res.status(500).json({
          message: "Profile image upload failed",
        });
      }
    }

    // Create user
    const user = await User.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: normalizedEmail,
      userName: normalizedUserName,
      password: hashedPassword,
      profileImage,
    });

    // Generate token
    const token = generateToken(user._id);

    // Set HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userName: user.userName,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);

    if (error.code === 11000) {
      const duplicateField = Object.keys(
        error.keyPattern || {}
      )[0];

      return res.status(409).json({
        message:
          duplicateField === "email"
            ? "Email already exists"
            : duplicateField === "userName"
              ? "Username already exists"
              : "An account with these details already exists",
      });
    }

    return res.status(500).json({
      message: "Internal server error during signup",
    });
  }
};


export const getUserData = async (req, res) => {
  try {
    let userId = req.userId;

    if (!userId) {
      return res.status(400).json({ message: "User ID does not exist" });
    } 

   
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    
    return res.status(200).json(user);

  } catch (error) {
    
    return res.status(500).json({ message: error.message });
  }
};