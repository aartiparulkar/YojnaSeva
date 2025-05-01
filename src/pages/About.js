// About.js
import React from "react";
import Layout from "../components/Layout";
import "../styles/about.css";
import missionImg from "../assets/missions.jpg";
import visionImg from "../assets/visions.jpg";
import featuresImg from "../assets/values (2).jpg";

const About = () => {
  return (
    <Layout>
      <section className="about-container">
        <h2 className="about-title">About YojanaSeva</h2>
        <p className="about-description">
          YojanaSeva is a platform that helps individuals discover and apply for government schemes.
          Our mission is to ensure that every eligible citizen gets the benefits they deserve.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <img src={missionImg} alt="Our Mission" className="about-img" />
            <h3>Our Mission</h3>
            <p>To bridge the gap between citizens and government welfare schemes.</p>
          </div>
          <div className="about-card">
            <img src={visionImg} alt="Our Vision" className="about-img" />
            <h3>Our Vision</h3>
            <p>Empowering individuals by making scheme information easily accessible.</p>
          </div>
          <div className="about-card">
            <img src={featuresImg} alt="Features" className="about-img" />
            <h3>Our Value</h3>
            <p>Inclusivity, Transparency, Empowerment, Efficiency, and Innovation.</p>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@yojanaseva.gov</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: 123, Government Scheme Office, Mumbai , India</p>
      </section>
    </Layout>
  );
};

export default About;
