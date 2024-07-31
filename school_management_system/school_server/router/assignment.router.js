import express from "express"
import { createAssignment, getAllAssignments } from "../controller/assignment.controller.js"

const assignmentRouter = express.Router()

assignmentRouter.get("/getall",getAllAssignments)
assignmentRouter.post("/create",createAssignment)

export default assignmentRouter