import express from "express";
import { getUserData, signUp } from "../controllers/signup.controller.js";
import { login } from "../controllers/login.controller.js";
import { logOut } from "../controllers/logout.controller.js";
import upload from "../middleware/upload.js";
import { checkAuth } from "../middleware/checkAuth.js";

const authRouter = express.Router();

authRouter.post("/signup", upload.single("profileImage"), signUp);

authRouter.post("/login", login);

authRouter.post("/logout", logOut);

authRouter.get("/getuserdata", checkAuth , getUserData);

export default authRouter;
