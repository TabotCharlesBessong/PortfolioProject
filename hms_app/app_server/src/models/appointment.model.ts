import { Schema, model, Document, Types } from "mongoose";

// Define Appointment Interface extending Document for Mongoose model typing
interface IAppointment extends Document {
  doctor: Types.ObjectId;
  patient: Types.ObjectId;
  appointmentDate: Date;
  reason?: string;
  status: "scheduled" | "inProgress" | "completed" | "cancelled";
  notes?: string;
  phone?:string
  email: string
}

// Define Appointment Schema
export const appointmentSchema = new Schema<IAppointment>({
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["scheduled", "inProgress", "completed", "cancelled"],
    default: "scheduled",
  },
  notes: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

// Define and export the Appointment model
const AppointmentModel = model<IAppointment>(
  "Appointment",
  appointmentSchema,
  "appointments"
);
export default AppointmentModel;
