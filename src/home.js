import React, { useState, useEffect } from "react";
import "./home.css";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode-active", newMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode-active");
    } else {
      document.body.classList.remove("dark-mode-active");
    }
  }, [darkMode]);

  // Scroll to a specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`home-container ${darkMode ? "dark" : "light"}`}>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1><i>YojanaSeva</i></h1>
          
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Enter scheme name to search..." />
          <button><FaSearch /></button>
        </div>
        <div className="nav-buttons">
          <button className="sign-in" onClick={() => navigate("/login")}>Sign In →</button>
          <button className="language">🌐 Eng</button>
          <button className="dark-mode" onClick={toggleDarkMode}>
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#schemes">Schemes</a></li>
          <li><a href="#about" onClick={() => scrollToSection("about")}>About</a></li>
          <li><a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-text">
          <h2><span className="highlight">Discover</span> government schemes for you...</h2>
          <p>Find Personalized Schemes Based on Eligibility</p>
        </div>
        <div className="image-row">
          <img src="/c1.jpg" alt="Agriculture Scheme" />
          <img src="/c2.jpg" alt="Education Scheme" />
          <img src="/c3.jpg" alt="Health Scheme" />
        </div>
      </section>
      {/* Schemes Section */}
      <section id="schemes" className="schemes-section">
        <h2 className="schemes-title">Government Schemes</h2>
        <div className="explore-btn-container">
          <button className="explore-btn" onClick={() => navigate("/eligibility")}>
            Explore More Schemes
          </button>
        </div>
      

        <div className="schemes-container">
  {[
    {
      name: "ADIP Scheme",
      info: "Provides aids and assistive devices to disabled persons to enhance their social and economic status.",
    },
    {
      name: "National Fellowship",
      info: "Financial support for students with disabilities pursuing higher education (M.Phil/Ph.D.).",
    },
    {
      name: "NIRAMAYA Health Insurance",
      info: "A health insurance scheme providing medical coverage for persons with disabilities.",
    },
    {
      name: "GYAN PRABHA Scheme",
      info: "A scholarship program supporting students with disabilities in higher education.",
    },
    {
      name: "VIKAAS (Day Care)",
      info: "A day-care scheme offering therapy, training, and recreational activities for children with disabilities.",
    },
    {
      name: "Free Education Scheme",
      info: "Covers tuition fees and educational support for children with disabilities.",
    },
    {
      name: "Central Sector Scheme of NHFDC",
      info: "Provides financial assistance for self-employment and skill development of disabled individuals.",
    },
    {
      name: "Vocational Training for Persons with Disabilities (VTPD)",
      info: "Enhances employability through skill-based training.",
    },
  ].map((scheme, index) => (
    <div key={index} className="scheme-card">
      <h3>{scheme.name}</h3>
      <p><i>{scheme.info}</i></p>
    </div>
  ))}
</div>

          
        </section>

        

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About </h2>
        <p>
          YojanaSeva is a platform that helps individuals discover and apply for government schemes. 
          Our mission is to ensure that every eligible citizen gets the benefits they deserve.
        </p>
        <p>We provide a personalized experience to help you find schemes that match your needs.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@yojanaseva.gov</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: 123, Government Scheme Office, New Delhi, India</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 SevaYojana. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
