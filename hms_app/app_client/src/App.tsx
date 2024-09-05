import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import { Navbar } from "./component"
import { HomePage } from "./page"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App