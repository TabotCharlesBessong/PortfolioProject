import express from "express";
import {
  getAppointments,
  addAppointment,
} from "../controller/appointment.controller";
// import checkAccess from "../middlewares/checkAccess";

const router = express.Router();

// Route to get all appointments
router.get("/get-appointments", getAppointments);

// Route to add a new appointment
router.post("/add-appointment", addAppointment);

export default router;
