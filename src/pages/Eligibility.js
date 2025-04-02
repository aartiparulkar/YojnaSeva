import React, { useState, useEffect } from "react";
import "../styles/eligibility.css";
import { useNavigate } from "react-router-dom";

const statesList = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
  "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep",
  "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
];

const EligibilityForm = ({ userName }) => {
  console.log("Username in Eligibility.js: ", userName)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: userName,
    contact: "",
    aadhar: "",
    disabilityPercentage: "",
    disabilityType: "",
    income: "",
    age: "",
    state: "",
  });

  const [errors, setErrors] = useState({
    contact: "",
    aadhar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure only numeric input for Contact & Aadhar
    if (name === "contact" || name === "aadhar") {
      if (!/^\d*$/.test(value)) {
        return; // Prevent updating state if non-numeric character is entered
      }
    }

    setFormData({ ...formData, [name]: value });

    // Contact Validation (10 digits)
    if (name === "contact") {
      if (!/^\d{10}$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          contact: "Contact must be a 10-digit number",
        }));
      } else {
        setErrors((prev) => ({ ...prev, contact: "" }));
      }
    }

    // Aadhar Validation (12 digits)
    if (name === "aadhar") {
      if (!/^\d{12}$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          aadhar: "Aadhar must be a 12-digit number",
        }));
      } else {
        setErrors((prev) => ({ ...prev, aadhar: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation check
    if (errors.contact || errors.aadhar) {
      alert("Please fix the errors before submitting.");
      return;
    }

    console.log("Form Submitted:", formData);
    // Add API call here if needed
  };

  return (
    <div className="eligibility-container">
      <button className="back-btn" onClick={() => navigate("/home")}>⬅ Back to Home</button>

      <h2>Check Your Eligibility</h2>

      <form className="eligibility-form" onSubmit={handleSubmit}>
        
        {/* Full Name */}
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" placeholder="Enter full name" value={formData.fullName} onChange={handleChange} required />
        </div>

        {/* Contact */}
        <div className="form-group">
          <label>Contact</label>
          <input type="text" name="contact" placeholder="Enter contact number" value={formData.contact} onChange={handleChange} maxLength="10" required />
          {errors.contact && <p className="error-text">{errors.contact}</p>}
        </div>

        {/* Aadhar Number */}
        <div className="form-group">
          <label>Aadhar Number</label>
          <input type="text" name="aadhar" placeholder="Enter Aadhar number" value={formData.aadhar} onChange={handleChange} maxLength="12" required />
          {errors.aadhar && <p className="error-text">{errors.aadhar}</p>}
        </div>

        {/* Disability Percentage */}
        <div className="form-group">
          <label>Disability Percentage</label>
          <input type="number" name="disabilityPercentage" placeholder="Enter percentage" value={formData.disabilityPercentage} onChange={handleChange} required />
        </div>

        {/* Disability Type */}
        <div className="form-group">
          <label>Disability Type</label>
          <select name="disabilityType" value={formData.disabilityType} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Visual">Visual</option>
            <option value="Hearing">Hearing</option>
            <option value="Locomotor">Locomotor</option>
            <option value="Mental">Mental</option>
          </select>
        </div>

        {/* Income */}
        <div className="form-group">
          <label>Annual Income</label>
          <input type="number" name="income" placeholder="Enter annual income" value={formData.income} onChange={handleChange} required />
        </div>

        {/* Age */}
        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" placeholder="Enter age" value={formData.age} onChange={handleChange} required />
        </div>

        {/* State */}
        <div className="form-group">
          <label>State</label>
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select</option>
            {statesList.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="explore-btn">Check Eligibility</button>
      </form>
    </div>
  );
};

export default EligibilityForm;
