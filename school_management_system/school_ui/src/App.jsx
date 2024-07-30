import React from "react";
import {
  AdminDashboard,
  AdminSignin,
  Home,
  StudentDashboard,
  StudentSignin,
  TeacherDashboard,
  TeacherSignin,
} from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChooseUser } from "./component";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose" element={<ChooseUser />} />
        <Route path="/admin-signin" element={<AdminSignin />} />
        <Route path="/student-signin" element={<StudentSignin />} />
        <Route path="/teacher-signin" element={<TeacherSignin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route exact path="/student/dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
