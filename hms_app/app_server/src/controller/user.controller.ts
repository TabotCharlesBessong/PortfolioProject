import { Request, Response } from 'express';
import ContactUs from '../models/contactUs.model';  // Import the ContactUs model

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
