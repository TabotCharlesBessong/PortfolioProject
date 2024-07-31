import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./db/connection.js";
import assignmentRouter from "./router/assignment.router.js";
import studentRouter from "./router/student.router.js";
import teacherRouter from "./router/teacher.router.js";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:5137"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/student", studentRouter);
app.use("/api/assignment", assignmentRouter);
app.use("/api/teacher", teacherRouter);

dbConnection();

export default app;
