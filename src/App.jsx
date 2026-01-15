import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./components/styles/globals.css";
import Login from "./components/LoginPage";
import Signup from "./components/SignupPage";
import Home from "./components/HomePage";
import Contact from "./components/ContactPage";
import About from "./components/AboutPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
