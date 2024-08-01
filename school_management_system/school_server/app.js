import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./db/connection.js";
import assignmentRouter from "./router/assignment.router.js";
import studentRouter from "./router/student.router.js";
import teacherRouter from "./router/teacher.router.js";
import bookRouter from "./router/library.router.js";
import classRouter from "./router/class.router.js";
import announcementRouter from "./router/announcement.router.js";
import cookieParser from "cookie-parser";
import eventRouter from "./router/event.router.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/student", studentRouter);
app.use("/api/assignment", assignmentRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/book", bookRouter);
app.use("/api/class", classRouter);
app.use("/api/announcement", announcementRouter);
app.use("/api/event", eventRouter);

dbConnection();

export default app;
