import React from "react";
import { AdminDashboard, AdminSignin, Home, StudentSignin, TeacherSignin } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChooseUser } from "./component";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose" element={<ChooseUser />} />
        <Route exact path="/admin-signin" element={<AdminSignin />} />
        <Route exact path="/student-signin" element={<StudentSignin />} />
        <Route exact path="/teacher-signin" element={<TeacherSignin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
