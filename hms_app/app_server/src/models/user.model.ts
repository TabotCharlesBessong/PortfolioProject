import { Schema, model, Document, Types } from "mongoose";
import { appointmentSchema } from "./appointment.model";

// Define Medication Interface
interface Medication {
  name: string;
  dosage: string;
  frequency: string;
}

// Define MedicalHistory Interface
interface MedicalHistory {
  condition: string;
  diagnosisDate?: Date;
  treatment: string;
  medications: Medication[];
}

// Define Appointment Interface
interface Appointment {
  date: Date;
  doctor: string;
  reason: string;
  // Add more fields as necessary
}

// Define User Interface extending Document for Mongoose model typing
export interface User extends Document {
  userName: string;
  email: string;
  password: string;
  role: "admin" | "doctor" | "nurse" | "receptionist" | "patient";
  phoneNumber?: string;
  dateOfBirth?: Date;
  gender?: string;
  address: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  };
  emergencyContact: {
    name?: string;
    relationship?: string;
    phoneNumber?: string;
  };
  medicalHistory: MedicalHistory[];
  appointments: Appointment[];
}

// Define Medication Schema
const medicationSchema = new Schema<Medication>({
  name: {
    type: String,
  },
  dosage: {
    type: String,
  },
  frequency: {
    type: String,
  },
});

// Define MedicalHistory Schema
const medicalHistorySchema = new Schema<MedicalHistory>({
  condition: {
    type: String,
    required: true,
  },
  diagnosisDate: {
    type: Date,
  },
  treatment: {
    type: String,
  },
  medications: [medicationSchema],
});


// Define User Schema
const userSchema = new Schema<User>({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "doctor", "nurse", "receptionist", "patient"],
    default: "patient",
  },
  phoneNumber: {
    type: String,
    default: "",
  },
  dateOfBirth: {
    type: Date,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  address: {
    street: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    zipCode: {
      type: String,
      default: "",
    },
  },
  emergencyContact: {
    name: {
      type: String,
      default: "",
    },
    relationship: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
      default: "",
    },
  },
  medicalHistory: { type: [medicalHistorySchema], default: [] },
  appointments: { type: [appointmentSchema], default: [] },
});

const UserModel = model<User>("User", userSchema, "users");
export default UserModel;
