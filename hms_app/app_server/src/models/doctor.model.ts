import { Schema, model, Document } from "mongoose";

// Define Doctor Interface extending Document for Mongoose model typing
interface IDoctor extends Document {
  name: string;
  email: string;
  password: string;
  specialization: string;
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
  password: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
});

// Define and export the Doctor model
const DoctorModel = model<IDoctor>("Doctor", doctorSchema, "doctors");
export default DoctorModel;
