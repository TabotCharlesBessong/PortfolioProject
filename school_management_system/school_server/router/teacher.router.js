import express from "express"
import teacherController from "../controller/teacher.controller.js"

const teacherRouter = express.Router()

teacherRouter.get("/getall",teacherController.getAllTeachers)
teacherRouter.post("/create",teacherController.createTeacher)

export default teacherRouter