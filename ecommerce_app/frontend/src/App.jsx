import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element="Hello home" />
        <Route path="/login" element="Hello Login" />
      </Routes>
    </Router>
  );
};

export default App;
