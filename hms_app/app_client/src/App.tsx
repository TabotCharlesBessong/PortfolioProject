import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import { AboutUs, ContactUs, Footer, Navbar } from "./component"
import { HomePage, SignInPage, SignUpPage } from "./page"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App