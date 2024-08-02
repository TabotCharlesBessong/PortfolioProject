import express from "express";
import { addExam, getAllExams } from "../controller/exam.controller.js";

const examRouter = express.Router();

examRouter.get("/getall", getAllExams);
examRouter.post("/create", addExam);

export default examRouter;
