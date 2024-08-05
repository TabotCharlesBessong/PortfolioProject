import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Activation, BestSelling, Events, HomePage, Login, Signup } from "./pages";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/activate" element={<Activation />} />
        <Route path="/best-selling" element={<BestSelling />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
};

export default App;
