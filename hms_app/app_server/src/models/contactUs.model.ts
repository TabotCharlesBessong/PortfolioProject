import { Schema, model, Document } from "mongoose";

// Define Contact Us Interface extending Document for Mongoose model typing
interface IContactUs extends Document {
  name: string;
  phone: number;
  email?: string;
  message: string;
}

// Define Contact Us Schema
const contactUsSchema = new Schema<IContactUs>({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
});

// Define and export the ContactUs model
const ContactUsModel = model<IContactUs>(
  "Contact",
  contactUsSchema,
  "contactus"
);
export default ContactUsModel;
