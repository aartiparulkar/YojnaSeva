import React, { useState } from "react";
import { FaEdit, FaSave, FaArrowUp } from "react-icons/fa"; // Icons for edit, save, and upload
import "../styles/profile.css"; // Import CSS file

const Profile = () => {
  const [user, setUser] = useState({
    name: "Nikita Mandharne",
    email: "niki@gmail.com",
    age: "25",
    gender: "Female",
    disability: "Visual Impairment",
    income: "Below ₹2,50,000",
    location: "Maharashtra, India",
    profilePic: "https://via.placeholder.com/150", // Default profile picture
  });

  const [isEditing, setIsEditing] = useState(false); // Track editing state

  // Handle profile picture upload
  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-pic-container">
            <img src={user.profilePic} alt="Profile" className="profile-pic" />
            <label htmlFor="profile-upload" className="upload-overlay">
              <FaArrowUp className="upload-icon" />
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              onChange={handleProfileUpload}
              style={{ display: "none" }}
            />
          </div>
        </div>

        <div className="profile-details">
          {["name", "email", "age", "gender", "disability", "income", "location"].map((field, index) => (
            <div key={index} className="detail-item">
              <span className="detail-title">{field.charAt(0).toUpperCase() + field.slice(1)}:</span>
              {isEditing ? (
                <input
                  type="text"
                  name={field}
                  value={user[field]}
                  onChange={handleChange}
                  className="input-field"
                />
              ) : (
                <span className="detail-value">{user[field]}</span>
              )}
            </div>
          ))}
        </div>

        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? <FaSave className="edit-icon" /> : <FaEdit className="edit-icon" />}
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
