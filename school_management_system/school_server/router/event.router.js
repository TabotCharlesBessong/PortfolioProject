import express from "express"
import { createEvents, getAllEvents } from "../controller/event.controller.js"

const eventRouter = express.Router()

eventRouter.get("/getall",getAllEvents)
eventRouter.post("/create",createEvents)

export default eventRouter