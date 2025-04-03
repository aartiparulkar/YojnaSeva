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
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    aadhar: "",
    "Disability Percentage": 0,
    "Annual Income": 0,
    "Disability Type": "",
    "Age": 0,
    "State Residing In": "",
  });


  const [errors, setErrors] = useState({
    contact: "",
    aadhar: "",
  });

  const [recommendedSchemes, setRecommendedSchemes] = useState([]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      fullName: userName || "",
    }));
  }, [userName]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict contact & aadhar inputs to only numbers
    if ((name === "contact" || name === "aadhar") && !/^\d*$/.test(value)) return;

    setFormData((prevData) => ({
      ...prevData,
      [name]: ["Disability Percentage", "Annual Income", "Age"].includes(name)
        ?  Number(value) || 0 // Ensure numeric fields are stored as numbers
        : value,

    }));

    // Validation errors
    setErrors((prev) => ({
      ...prev,
      contact: name === "contact" && !/^\d{10}$/.test(value) ? "Contact must be a 10-digit number" : "",
      aadhar: name === "aadhar" && !/^\d{12}$/.test(value) ? "Aadhar must be a 12-digit number" : "",
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert Disability Type to match API expectations before sending the request
    const disabilityMapping = {
      "Hearing": "hearing",
      "Visual": "visual",
      "Mental": "mental",
      "Physical": "physical"
    };

    const processedData = {
      ...formData,
      "Disability Type": disabilityMapping[formData["Disability Type"]] || formData["Disability Type"].toLowerCase()
    };

    // console.log("Sent Payload:", formData); // Debugging Log

    try {
      const response = await fetch("http://127.0.0.1:5001/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(processedData),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error("Invalid JSON response from API");
      }
      // console.log("API Response:", data); // Debugging Log

      if (!data || !Array.isArray(data.recommendedSchemes)) {
        throw new Error("Invalid response structure");
      }

      navigate("/recommended_schemes", { state: { schemes: data.recommendedSchemes, userData: processedData } });

    } catch (error) {
      console.error("Error fetching recommendations:", error.message);
      setRecommendedSchemes([]); 
    }
  };



  return (
    <div className="eligibility-container">
      <button className="explore-btn" onClick={() => navigate("/home")}>Back to Home</button>

      <h2>Check Your Eligibility</h2>

      <form className="eligibility-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName || ""} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Contact</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} maxLength="10" required />
          {errors.contact && <p className="error-text">{errors.contact}</p>}
        </div>

        <div className="form-group">
          <label>Aadhar Number</label>
          <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} maxLength="12" required />
          {errors.aadhar && <p className="error-text">{errors.aadhar}</p>}
        </div>

        <div className="form-group">
          <label>Disability Percentage</label>
          <input type="number" name="Disability Percentage" value={formData["Disability Percentage"]} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Disability Type</label>
          <select name="Disability Type" value={formData["Disability Type"]} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Visual">Visual</option>
            <option value="Hearing">Hearing</option>
            <option value="Physical">Physical</option>
            <option value="Mental">Mental</option>
          </select>
        </div>

        <div className="form-group">
          <label>Annual Income</label>
          <input type="number" name="Annual Income" value={formData["Annual Income"]} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" name="Age" value={formData["Age"]} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>State Residing In</label>
          <select name="State Residing In" value={formData["State Residing In"]} onChange={handleChange} required>
            <option value="">Select</option>
            {statesList.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="explore-btn">Check Eligibility</button>
      </form>


      {/* Display Recommended Schemes */}
      {recommendedSchemes && recommendedSchemes.length > 0 && (
        <div className="recommendations">
          <h3>Recommended Schemes:</h3>
          <ul>
            {recommendedSchemes.map((scheme, index) => (
              <li key={index}>{scheme}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default EligibilityForm;
