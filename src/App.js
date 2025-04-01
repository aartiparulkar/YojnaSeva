import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Schemes from "./pages/Scheme";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EligibilityForm from "./pages/Eligibility"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eligibility" element={<EligibilityForm />} />
      </Routes>
    </Router>
  );
}

export default App;
