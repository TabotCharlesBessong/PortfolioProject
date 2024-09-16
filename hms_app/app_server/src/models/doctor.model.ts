import { Schema, model, Document } from "mongoose";

// Define Doctor Interface extending Document for Mongoose model typing
interface IDoctor extends Document {
  doctorId: string;
  name: string;
  email: string;
  password: string;
  specialization: string;
  role: "admin" | "doctor" | "nurse" | "receptionist" | "patient"
}

// Define Doctor Schema
const doctorSchema = new Schema<IDoctor>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  doctorId: {
    type: String,
    required: true,
    unique: true,
    default: () => `DR${Math.floor(1000 + Math.random() * 9000)}`, // Unique doctor ID generator
  },
  password: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "doctor", "nurse", "receptionist", "patient"],
    default: "doctor",
  },
});

// Define and export the Doctor model
const DoctorModel = model<IDoctor>("Doctor", doctorSchema, "doctors");
export default DoctorModel;
