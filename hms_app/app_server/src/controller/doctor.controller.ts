import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Doctor from "../models/doctor.model"; // Import the Doctor model

// Controller to get all doctors
export const getDoctors = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const doctors = await Doctor.find({});
    return res.json(doctors);
  } catch (error:any) {
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
  } catch (error:any) {
    return res.status(500).json({ error: error.message });
  }
};
