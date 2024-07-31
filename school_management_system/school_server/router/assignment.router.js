import express from "express"
import assignmentController from "../controller/assignment.controller.js"

const assignmentRouter = express.Router()

assignmentRouter.get("/getall",assignmentController.getAllAssignments)
assignmentRouter.post("/create",assignmentController.createAssignment)

export default assignmentRouter