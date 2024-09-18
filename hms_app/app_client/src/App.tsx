import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  AboutUs,
  AdminDoctor,
  AdminNewsletter,
  AdminNurse,
  AdminPatient,
  AdminQuery,
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
  AdminDashPage,
  DoctorAuthPage,
  DoctorProfilePage,
  HomePage,
  NurseAuthPage,
  NurseProfilePage,
  SignInPage,
  SignUpPage,
  UserProfilePage,
} from "./page";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
            <Route
              path="/doctor-appointments"
              element={<DoctorAppointment />}
            />
            <Route path="/nurse-profile" element={<NurseProfilePage />} />
            <Route path="/nurse-medication" element={<NurseMedication />} />
            <Route path="/nurse-bed" element={<NurseBed />} />
            <Route path="/nurse-bed" element={<NurseBed />} />
            <Route path="/admin-dashboard" element={<AdminDashPage />} />
            <Route path="/admin-doctor" element={<AdminDoctor />} />
            <Route path="/admin-nurse" element={<AdminNurse />} />
            <Route path="/admin-patient" element={<AdminPatient />} />
            <Route path="/admin-query" element={<AdminQuery />} />
            <Route path="/admin-newsletter" element={<AdminNewsletter />} />
          </Routes>
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
