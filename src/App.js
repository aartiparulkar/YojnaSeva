import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import HomePage from "./home";
import EligibilityForm from "./eligibility"; // Ensure correct path

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/eligibility" element={<EligibilityForm />} />
      </Routes>
    </Router>
  );
}

export default App;
