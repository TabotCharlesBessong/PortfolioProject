import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Footer, Header } from "./components";
import { SignIn, SignUp } from "./pages";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={"Home page"} />
        <Route path="/about" element={"About page"} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={"Dashboard"} />
        <Route path="/projects" element={"Projects Page"} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
