import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Doctor from "../models/doctor.model"; // Import the Doctor model
import AppointmentModel from "../models/appointment.model";

// Controller to get all doctors
export const getDoctors = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const doctors = await Doctor.find();
    return res.json(doctors);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// Controller to add a new doctor
export const addDoctor = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email, password, specialization } = req.body;

  try {
    const existingUser = await Doctor.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Doctor with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Doctor({
      name,
      email,
      password: hashedPassword,
      specialization,
    });

    const savedUser = await newUser.save();
    return res.json(savedUser);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateDoctor = async (req: Request, res: Response) => {
  const { name, email, specialization } = req.body;
  try {
    const userExist = await Doctor.findOne({ email });
    if (!userExist)
      return res.status(404).json({ error: "Doctor does not exist!" });

    const updatedUser = {
      name,
      email,
      specialization,
    };

    const user = await Doctor.findByIdAndUpdate(req.params.id, updatedUser);
    res.json(user);
  } catch (error) {}
};

export const deleteDoctor = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await Doctor.findByIdAndDelete(userId);
  } catch (error) {
    res.status(500).json({ error: (error as TypeError).message });
  }
};

export const getAppoinments = async (req:Request,res:Response) => {
  const {doctor} = req.params;
  try {
    const appointments = await AppointmentModel.find({ doctor });

    if (appointments.length === 0) {
      return res.json({ message: "No appointments found" });
    } else {
      return res.json(appointments);
    }
  } catch (error) {
    res.status(500).json({ error: (error as TypeError).message });
  }
}
