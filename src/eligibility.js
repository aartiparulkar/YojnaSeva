import React from "react";
import "./eligibility.css";
import { useNavigate } from "react-router-dom";

const EligibilityForm = () => {
  const navigate = useNavigate();

  return (
    <div className="eligibility-container">
      <button className="back-btn" onClick={() => navigate("/home")}>⬅ Back to Home</button>

      <h2>Check Your Eligibility</h2>

      <form className="eligibility-form">
        {/* State */}
        <div className="form-group">
          <label>State</label>
          <select>
            <option>Select</option>
            <option>Maharashtra</option>
            <option>Uttar Pradesh</option>
            <option>Delhi</option>
          </select>
        </div>

        

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label><input type="radio" name="gender" value="Male" /> Male</label>
            <label><input type="radio" name="gender" value="Female" /> Female</label>
            <label><input type="radio" name="gender" value="Other" /> Other</label>
          </div>
        </div>

        {/* Age with Calendar Picker */}
        <div className="form-group">
          <label>Age</label>
          <input type="date" />
        </div>

        {/* Caste */}
        <div className="form-group">
          <label>Caste</label>
          <select>
            <option>Select</option>
            <option>General</option>
            <option>OBC</option>
            <option>SC</option>
            <option>ST</option>
          </select>
        </div>

        

        {/* Residence */}
        <div className="form-group">
          <label>Residence</label>
        <div className="radio-group">
            <label><input type="radio" name="Rural" value="Yes" /> Yes</label>
            <label><input type="radio" name="Urban" value="No" /> No</label>
          </div></div>
          
     
       

        {/* Minority */}
        <div className="form-group">
          <label>Minority</label>
          <div className="radio-group">
            <label><input type="radio" name="minority" value="Yes" /> Yes</label>
            <label><input type="radio" name="minority" value="No" /> No</label>
          </div>
        </div>

        {/* Differently Abled */}
        <div className="form-group">
          <label>Differently Abled</label>
          <div className="radio-group">
            <label><input type="radio" name="disabled" value="Yes" /> Yes</label>
            <label><input type="radio" name="disabled" value="No" /> No</label>
          </div>
        </div>

        {/* Benefit Type */}
        <div className="form-group">
          <label>Benefit Type</label>
          <select>
            <option>Select</option>
            <option>Financial Assistance</option>
            <option>Scholarship</option>
            <option>Employment Support</option>
          </select>
        </div>

       

        {/* Marital Status */}
        <div className="form-group">
          <label>Marital Status</label>
          <select>
            <option>Select</option>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
          </select>
        </div>

        {/* Disability Percentage */}
        <div className="form-group">
          <label>Disability Percentage</label>
          <input type="number" placeholder="Enter percentage" />
        </div>

        {/* Below Poverty Line */}
        <div className="form-group">
          <label>Below Poverty Line</label>
          <div className="radio-group">
            <label><input type="radio" name="bpl" value="Yes" /> Yes</label>
            <label><input type="radio" name="bpl" value="No" /> No</label>
          </div>
        </div>

        

        {/* Government Employee */}
        <div className="form-group">
          <label>Government Employee</label>
          <div className="radio-group">
            <label><input type="radio" name="govt-employee" value="Yes" /> Yes</label>
            <label><input type="radio" name="govt-employee" value="No" /> No</label>
          </div>
        </div>

        {/* Employment Status */}
        <div className="form-group">
          <label>Employment Status</label>
          <select>
            <option>Select</option>
            <option>Employed</option>
            <option>Unemployed</option>
          </select>
        </div>

        {/* Student */}
        <div className="form-group">
          <label>Student</label>
          <div className="radio-group">
            <label><input type="radio" name="student" value="Yes" /> Yes</label>
            <label><input type="radio" name="student" value="No" /> No</label>
          </div>
        </div>

        {/* Occupation */}
        <div className="form-group">
          <label>Occupation</label>
          <input type="text" placeholder="Enter your occupation" />
        </div>

        {/* Application Mode */}
        <div className="form-group">
          <label>Application Mode</label>
          <select>
            <option>Select</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Check Eligibility</button>
      </form>
    </div>
  );
};

export default EligibilityForm;
