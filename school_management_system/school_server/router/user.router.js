import express from "express";
import { studentSignIn, teacherSignIn } from "../controller/user.controller.js";
import studentRouter from "./student.router.js";

const userRouter = express.Router();

userRouter.post("/student/signin", studentSignIn);
userRouter.post("/teacher/signin", teacherSignIn);

export default userRouter
