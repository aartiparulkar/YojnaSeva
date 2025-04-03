import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/layout.css";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [username, setUserName] = useState(""); // Store user's name
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Fetch user data from backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from local storage
        if (!token) {
          setIsLoggedIn(false);
          return;
        }

        const response = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserName(response.data.fullName); // Store user name
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error fetching user:", error);
        setIsLoggedIn(false);
      }
    };

    fetchUserData();
  }, []);

  const userInitial = username ? username.charAt(0).toUpperCase() : "?";

  // Toggle User Menu
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setUserName("");
    setIsLoggedIn(false);
    setUserMenuOpen(false);
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="layout-container">
      <header className="header navbar">
        <div className="logo">
          <h1><i>YojanaSeva</i></h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/schemes">Schemes</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* User Profile Button */}
        <div className="user-profile-container">
          {isLoggedIn ? (
            <>
              <div className="user-profile" onClick={toggleUserMenu}>
                {userInitial}
              </div>

              {userMenuOpen && (
                <div className="user-menu">
                  <ul>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <hr />
                    <li className="logout" onClick={handleLogout}>Log Out</li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link to="/login" className="login-button"></Link>
          )}
        </div>
      </header>

      <main>
        {React.Children.map(children, (child) =>
          React.isValidElement(child) ? React.cloneElement(child, { username }) : child
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2025 SevaYojana. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
