import React from "react";
import Layout from "../components/Layout";
import "../styles/about.css";

const About = () => {
  return (
    <Layout>
      <section className="about-section">
        <h2>About</h2>
        <p>
          YojanaSeva is a platform that helps individuals discover and apply for government schemes. 
          Our mission is to ensure that every eligible citizen gets the benefits they deserve.
        </p>
        <p>We provide a personalized experience to help you find schemes that match your needs.</p>
      </section>
    </Layout>
  );
};

export default About;
