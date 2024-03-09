import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./router/user.router.js";
import postRouter from "./router/post.router.js";
import commentRouter from "./router/comment.router.js";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(express.json({ limit: "10mb" }));
app.use(cors());
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("Connected to the database successfully"))
  .catch((err) => console.log("Error connecting to the database"));

app.listen(PORT, () => {
  console.log(`The server is running at port number ${PORT}.... `);
});
