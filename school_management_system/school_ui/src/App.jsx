import React from 'react'
import { Home } from './pages'
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import { ChooseUser } from './component';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/choose' element={<ChooseUser />} />
      </Routes>
    </Router>
  );
}

export default App