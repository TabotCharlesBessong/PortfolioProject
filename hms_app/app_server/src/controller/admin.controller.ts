import { Request, Response } from "express";
import User from "../models/user.model";
import Department from "../models/department.model";
import ContactUs from "../models/contactUs.model";
import NurseModel from "../models/nurse.model";
import DoctorModel from "../models/doctor.model";

// Get all users
export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await User.find({});
    return res.json(users);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete a user by ID
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    return res.json(deletedUser);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// Get all contact messages
export const getContacts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const contacts = await ContactUs.find({});
    return res.json(contacts);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// Add a new department
export const addDepartment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, description, head, staff } = req.body;
  try {
    const existingDept = await Department.findOne({ name });

    if (existingDept) {
      return res
        .status(400)
        .json({ error: "Department with the same name already exists" });
    }

    const newDept = new Department({
      name,
      description,
      head,
      staff,
    });

    const savedDept = await newDept.save();
    return res.json(savedDept);
  } catch (error) {
    return res.status(500).json({ error: (error as TypeError).message });
  }
};

// Delete a department by ID
export const deleteDepartment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const deletedDept = await Department.findByIdAndDelete(req.params.id);
    return res.json(deletedDept);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// Get all departments
export const getDepartments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const depts = await Department.find({}).populate("head", "name");
    return res.json(depts);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// Count all users, contacts, and departments
export const countAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const usersCount = await User.countDocuments().exec()
    const contactsCount = await ContactUs.countDocuments().exec()
    const deptsCount = await Department.countDocuments().exec()
    const patientCount = await User.countDocuments({role:"patient"}).exec()
    const queriesCount = await ContactUs.countDocuments({}).exec()
    const nurseCount = await NurseModel.countDocuments({}).exec()
    const doctorCount = await DoctorModel.countDocuments().exec()

    return res.json({
      patientCount,
      queriesCount,
      deptsCount,
      doctorCount,
      nurseCount,
      usersCount,
      contactsCount
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
