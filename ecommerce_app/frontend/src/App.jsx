import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Login, Signup } from "./pages";
import {ToastContainer} from "react-toastify"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element="Hello home" />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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
