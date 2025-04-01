import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        const res = await axios.post("http://localhost:5000/api/auth/register", {
          fullName,
          email,
          password,
        });
        alert(res.data.message);
        setIsSignUp(false);
      } else {
        const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
        alert("Sign In Successful!");
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      }
    } catch (err) {
      alert(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
          )}
          <div className="input-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
              Remember Me
            </label>
            {!isSignUp && <a href="#">Forgot Password?</a>}
          </div>
          <button type="submit" className="auth-button">{isSignUp ? "Sign Up" : "Sign In"}</button>
        </form>
        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-button">
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
