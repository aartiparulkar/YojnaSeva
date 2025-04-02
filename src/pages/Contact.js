import React from "react";
import Layout from "../components/Layout";
import "../styles/contact.css";

const Contact = ({ userName }) => {
  return (
    <Layout>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@yojanaseva.gov</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: 123, Government Scheme Office, New Delhi, India</p>
      </section>
    </Layout>
  );
};

export default Contact;
