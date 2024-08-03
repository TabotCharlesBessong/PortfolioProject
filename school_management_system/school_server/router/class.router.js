import express from "express"
import { createClass, getAllClasses } from "../controller/class.controller.js"

const classRouter = express.Router()

classRouter.get("/getall",getAllClasses)
classRouter.post("/create",createClass)

export default classRouter