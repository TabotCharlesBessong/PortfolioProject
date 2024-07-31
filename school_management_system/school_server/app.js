import express from "express";
import dotenv from "dotenv";
import cors from "cors"

const app = express();
dotenv.config()

app.use(
  cors({
    origin: ["http://localhost:5137"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/student", studentRouter);

// dbConnection();

export default app;
