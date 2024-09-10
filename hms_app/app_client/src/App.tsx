import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  AboutUs,
  Appointment,
  ContactUs,
  Footer,
  Navbar,
  UserAppointment,
  UserBookAppointment,
} from "./component";
import {
  DoctorAuthPage,
  HomePage,
  NurseAuthPage,
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
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
