import { Request, Response } from "express";
import Nurse from "../models/nurse.model"; // Import the Nurse model

// Controller to get all nurses
export const getNurses = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const nurses = await Nurse.find({});
    return res.json(nurses);
  } catch (error:any) {
    return res.status(500).json({ error: error.message });
  }
};

// Controller to add a new nurse
export const addNurse = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email, password, ward, department } = req.body;

  try {
    const newNurse = new Nurse({
      name,
      email,
      password,
      ward,
      department,
    });

    const savedNurse = await newNurse.save();

    return res.json(savedNurse);
  } catch (error:any) {
    return res.status(500).json({ error: error.message });
  }
};
