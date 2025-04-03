import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Schemes from "./pages/Scheme";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EligibilityForm from "./pages/Eligibility"; 
import Layout from "./components/Layout";
import SchemesPage from "./pages/RecommendSchemes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eligibility" element={ <Layout><EligibilityForm /></Layout> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/recommended_schemes" element={<SchemesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
