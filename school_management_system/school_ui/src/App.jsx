import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ChooseUser } from "./component";
import {
  AdminDashboard,
  AdminSignin,
  Announcement,
  Assignments,
  Attendance,
  Classes,
  EventCalender,
  Exam,
  Home,
  Library,
  Performance,
  SettingsProfile,
  StudentAnnouncement,
  StudentAssignment,
  StudentAttendance,
  StudentDashboard,
  StudentExams,
  StudentLibrary,
  StudentPerformance,
  StudentProfile,
  Students,
  StudentSignin,
  TeacherAnnouncement,
  TeacherAssignment,
  TeacherDashboard,
  Teachers,
  TeacherSignin,
} from "./pages";

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
        <Route path="/admin/exams" element={<Exam />} />
        <Route path="/admin/attendance" element={<Attendance />} />
        <Route path="/admin/performance" element={<Performance />} />
        <Route path="/admin/students" element={<Students />} />
        <Route path="/admin/teachers" element={<Teachers />} />
        <Route path="/admin/settings" element={<SettingsProfile />} />
        <Route path="/admin/library" element={<Library />} />
        <Route path="/admin/events" element={<EventCalender />} />
        <Route path="/admin/communication" element={<Announcement />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/assignments" element={<StudentAssignment />} />
        <Route path="/student/exams" element={<StudentExams />} />
        <Route path="/student/communication" element={<StudentAnnouncement />} />
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/student/library" element={<StudentLibrary />} />
        <Route path="/student/performance" element={<StudentPerformance />} />
        <Route path="/student/settings" element={<StudentProfile />} />
        <Route path="/admin/assignments" element={<Assignments />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/communication" element={<TeacherAnnouncement />} />
        <Route path="/teacher/assignments" element={<TeacherAssignment />} />
      </Routes>
    </Router>
  );
};

export default App;
