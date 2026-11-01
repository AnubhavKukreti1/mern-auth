
import "dotenv/config";

import express from "express";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8000;

const allowedOrigins = [
  "http://localhost:5173",
  process.env.PRODUCTION_FRONTEND_URL,
].filter(Boolean);
const vercelPreviewOrigin =
  /^https:\/\/mern-auth-[a-z0-9-]+-anubhav-kukreti-s-projects\.vercel\.app$/i;

const corsOptions = {
  origin: (origin, callback) => {
    const isAllowed =
      !origin ||
      allowedOrigins.includes(origin) ||
      vercelPreviewOrigin.test(origin);
    return callback(null, isAllowed);
  },
  credentials: true,
};

app.options(/.*/, cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Server Started on ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
