import { Schema, model, Document, Types } from "mongoose";

// Define Nurse Interface extending Document for Mongoose model typing
interface INurse extends Document {
  name: string;
  email: string;
  password: string;
  ward: string;
  department: Types.ObjectId; // Reference to Department
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
    type: Schema.Types.ObjectId,
    ref: "Department",
  },
});

// Define and export the Nurse model
const NurseModel = model<INurse>("Nurse", nurseSchema, "nurses");
export default NurseModel;
