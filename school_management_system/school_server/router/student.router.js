import express from "express"
import studentController from "../controller/student.controller"

const studentRouter = express.Router()

studentRouter.get("/getall",studentController.getAllStudents)
studentRouter.post("/create",studentController.createStudent)

export default studentRouter