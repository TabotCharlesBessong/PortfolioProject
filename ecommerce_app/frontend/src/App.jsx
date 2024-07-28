import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Login, Signup } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element="Hello home" />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
