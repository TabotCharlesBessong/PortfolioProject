export interface SignInProps {
  email: string;
  password: string;
}

export interface SignUpProps {
  email: string;
  password: string;
  userName: string
}

export interface LoginResponse {
  role: string;
  token: string
  user:User
}

export interface IAppointment {
  patient: string;
  phone: string;
  appointmentDate: string;
  time: string;
  doctor: string;
  reason: string;
  email: string
  _id: string
}

export interface IContact {
  name: string;
  email: string;
  phone: string;
  message: string;
  _id?: string
}

export interface UserData {
  name: string;
  mobileNumber: string;
  address: string;
  city: string;
  state: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  _id?: string
}

export interface MedicalHistory {
  condition: string;
  diagnosisDate?: Date;
  treatment: string;
  medications: Medication[];
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
}

// Define Appointment Interface
export interface Appointment {
  date: Date;
  doctor: string;
  reason: string;
  // Add more fields as necessary
}

export interface User {
  userName: string;
  email: string;
  password: string;
  role: "admin" | "doctor" | "nurse" | "receptionist" | "patient";
  phoneNumber?: string;
  dateOfBirth?: Date;
  gender?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  };
  emergencyContact?: {
    name?: string;
    relationship?: string;
    phoneNumber?: string;
  };
  medicalHistory?: MedicalHistory[];
  appointments?: Appointment[];
  _id?: string
}

export interface AppointmentForm {
  patient: string;
  phone: string;
  address: string;
  gender: string;
  email: string;
  appointmentDate: string;
  reason: string;
}

export interface IDoctor {
  doctorId: string;
  name: string;
  email: string;
  password: string;
  specialization: string;
  role: "admin" | "doctor" | "nurse" | "receptionist" | "patient";
  _id: string
}

export interface INewsLetter {
  subject: string;
  message: string;
}

