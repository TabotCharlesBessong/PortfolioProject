import express from "express";
import { getAllAttendance, markAttendance } from "../controller/attendance.controller.js";

const attendanceRouter = express.Router();

attendanceRouter.get("/getall", getAllAttendance);
attendanceRouter.post("/create", markAttendance);

export default attendanceRouter;
