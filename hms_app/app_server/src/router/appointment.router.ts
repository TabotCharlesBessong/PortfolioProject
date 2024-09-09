import express from "express";
import {
  getAppointments,
  addAppointment,
} from "../controller/appointment.controller";
// import checkAccess from "../middlewares/checkAccess";

const appointmentRouter = express.Router();

// Route to get all appointments
appointmentRouter.get("/get-appointments", getAppointments);

// Route to add a new appointment
appointmentRouter.post("/add-appointment", addAppointment);

export default appointmentRouter;
