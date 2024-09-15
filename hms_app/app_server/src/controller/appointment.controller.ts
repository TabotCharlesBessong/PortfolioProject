import { Request, Response } from "express";
import Appointment from "../models/appointment.model";
import AppointmentModel from "../models/appointment.model";

// Get all appointments
export const getAppointments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const appointments = await AppointmentModel.find({});
    return res.json(appointments);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// getting a single appointment information
export const getAppointmentDetail = async (req:Request,res:Response) => {
  const {id} = req.params
  try {
    const appointment = await AppointmentModel.findById(id)
    if(appointment === null) {
      return res.json({message:"No appointments booked!"})
    }
    return res.json({appointment})
  } catch (error:any) {
    res.status(5000).json({error:error.message})
  }
}

// Add a new appointment
export const addAppointment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { doctor, patient, appointmentDate, reason, phone } = req.body;

  try {
    const newAppointment = new Appointment({
      doctor,
      patient,
      appointmentDate,
      reason,
      phone
    });

    const savedAppointment = await newAppointment.save();
    return res.json(savedAppointment);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
