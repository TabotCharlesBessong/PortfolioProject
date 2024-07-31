import express from "express";
import {
  createStudent,
  getAllStudents,
} from "../controller/student.controller.js";

const studentRouter = express.Router();

studentRouter.get("/getall", getAllStudents);
studentRouter.post("/create", createStudent);

export default studentRouter;
