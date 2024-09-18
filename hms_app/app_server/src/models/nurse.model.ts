import { Schema, model, Document, Types } from "mongoose";

// Define Nurse Interface extending Document for Mongoose model typing
interface INurse extends Document {
  name: string;
  email: string;
  password: string;
  ward: string;
  department: String; // Reference to Department
  role: "admin" | "doctor" | "nurse" | "receptionist" | "patient";
}

// Define Nurse Schema
const nurseSchema = new Schema<INurse>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  ward: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    // ref: "Department",
  },
  role: {
    type: String,
    enum: ["admin", "doctor", "nurse", "receptionist", "patient"],
    default: "doctor",
  },
});

// Define and export the Nurse model
const NurseModel = model<INurse>("Nurse", nurseSchema, "nurses");
export default NurseModel;
