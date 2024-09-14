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
}

export interface IDoctor {
  _id: string;
  name: string;
  specialty?: string;
}

export interface IAppointment {
  patient: string;
  phone: string;
  appointmentDate: string;
  time: string;
  doctor: string;
  reason: string;
}

export interface IContact {
  name: string;
  email: string;
  phone: string;
  message: string;
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
}
