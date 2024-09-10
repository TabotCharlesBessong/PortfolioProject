import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  AboutUs,
  Appointment,
  ContactUs,
  DoctorAppointment,
  DoctorReview,
  Footer,
  Navbar,
  NurseBed,
  NurseMedication,
  UserAppointment,
  UserBookAppointment,
  UserMedication,
} from "./component";
import {
  DoctorAuthPage,
  DoctorProfilePage,
  HomePage,
  NurseAuthPage,
  NurseProfilePage,
  SignInPage,
  SignUpPage,
  UserProfilePage,
} from "./page";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/doctor-sign-in" element={<DoctorAuthPage />} />
        <Route path="/nurse-sign-in" element={<NurseAuthPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/user-appointments" element={<UserAppointment />} />
        <Route
          path="/user-book-appointment"
          element={<UserBookAppointment />}
        />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/doctor-profile" element={<DoctorProfilePage />} />
        <Route path="/user-medication" element={<UserMedication />} />
        <Route path="/doctor-review" element={<DoctorReview />} />
        <Route path="/doctor-appointments" element={<DoctorAppointment />} />
        <Route path="/nurse-profile" element={<NurseProfilePage />} />
        <Route path="/nurse-medication" element={<NurseMedication />} />
        <Route path="/nurse-bed" element={<NurseBed />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
