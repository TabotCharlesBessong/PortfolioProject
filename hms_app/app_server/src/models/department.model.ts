import { Schema, model, Document, Types } from "mongoose";

// Define Department Interface extending Document for Mongoose model typing
interface IDepartment extends Document {
  name: string;
  description?: string;
  head: Types.ObjectId; // Reference to Doctor
  staff: Types.ObjectId[]; // Array of references to Nurses
}

// Define Department Schema
const departmentSchema = new Schema<IDepartment>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  head: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
  staff: [
    {
      type: Schema.Types.ObjectId,
      ref: "Nurse",
    },
  ],
});

// Define and export the Department model
const DepartmentModel = model<IDepartment>(
  "Department",
  departmentSchema,
  "departments"
);
export default DepartmentModel;
