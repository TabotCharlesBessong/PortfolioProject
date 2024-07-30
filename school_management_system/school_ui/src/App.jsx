import React from "react";
import {
  AdminDashboard,
  AdminSignin,
  Assignments,
  Attendance,
  Classes,
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
        <Route path="/admin/classes" element={<Classes />} />
        <Route path="/admin/attendance" element={<Attendance />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route exact path="/admin/assignments" element={<Assignments />} />
      </Routes>
    </Router>
  );
};

export default App;
