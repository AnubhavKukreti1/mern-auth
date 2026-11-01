import { authCookieOptions } from "../config/authCookie.js";

export const logOut = async (req, res) => {
  try {
    res.clearCookie("token", authCookieOptions);

    return res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
