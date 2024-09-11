import { Request, Response } from 'express';
import ContactUs from '../models/contactUs.model';  // Import the ContactUs model
import UserModel from '../models/user.model';

// Controller for adding a new Contact Us entry
export const addContactUs = async (req: Request, res: Response): Promise<Response> => {
  const { name, phone, email, message } = req.body;

  try {
    const newContactUs = new ContactUs({
      name,
      phone,
      email,
      message,
    });

    const savedContactUs = await newContactUs.save();

    return res.json(savedContactUs);
  } catch (error:any) {
    return res.status(500).json({ error: error.message });
  }
};

export const getUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, email } = req.query;

  try {
    if (!userId && !email) {
      res
        .status(400)
        .json({ status: "Failure", message: "UserId or Email is required" });
      return;
    }

    const user = await UserModel.findOne({ $or: [{ _id: userId }, { email }] });

    if (!user) {
      res.status(404).json({ status: "Failure", message: "User not found" });
      return;
    }

    res.status(200).json({ status: "Success", user });
  } catch (error:any) {
    res.status(500).json({ status: "Error", message: error.message });
  }
};