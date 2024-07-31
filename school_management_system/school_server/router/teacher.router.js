import express from "express"
import { createTeacher, getAllTeachers } from "../controller/teacher.controller.js"

const teacherRouter = express.Router()

teacherRouter.get("/getall",getAllTeachers)
teacherRouter.post("/create",createTeacher)

export default teacherRouter