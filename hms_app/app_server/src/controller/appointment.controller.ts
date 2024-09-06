import { Request, Response } from "express";
import Appointment from "../models/appointment.model";

// Get all appointments
export const getAppointments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const appointments = await Appointment.find({});
    return res.json(appointments);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// Add a new appointment
export const addAppointment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { doctorId, patientId, appointmentDate, reason, status } = req.body;

  try {
    const newAppointment = new Appointment({
      doctor: doctorId,
      patient: patientId,
      appointmentDate,
      reason,
      status,
    });

    const savedAppointment = await newAppointment.save();
    return res.json(savedAppointment);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
