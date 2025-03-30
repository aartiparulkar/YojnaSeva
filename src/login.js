import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./login.css";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // ✅ Create navigate function

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      alert("Sign Up Successful! Please Sign In.");
      setIsSignUp(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRememberMe(false);
    } else {
      alert("Sign In Successful!");
      navigate("/home"); // ✅ Navigate to Home Page after sign in
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {isSignUp && (
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
          )}
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
