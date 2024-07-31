import express from "express"
import { createAnnouncement, getAllAnnouncements } from "../controller/announcement.controller.js"

const announcementRouter = express.Router()

announcementRouter.get("/getall",getAllAnnouncements)
announcementRouter.post("/create",createAnnouncement)

export default announcementRouter