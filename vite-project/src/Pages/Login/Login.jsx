import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./Login.css";
import { useState } from "react";
// import Password from "antd/es/input/Password";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Use navigate to redirect after login

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page refresh
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
  
    if (!emailRegex.test(email)) {
      alert("Invalid email format. Please enter a valid email.");
      return;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
  
    
    const authToken = btoa(Math.random().toString(36).substring(2, 15));
    localStorage.setItem("authToken", authToken); // Store token for authentication
  
    // alert("Login successful!");
    navigate("/home"); // Redirect to product page after successful login
  };
  

  return (
    <div className="mainbody">
      <div className="maincontainer">
        <form className="formwrapper" onSubmit={handleLogin}>
          {/* EMAIL INPUT */}
          <div className="namewrapper">
            <h5 style={{ color: "blue" }}>EMAIL</h5>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "80%",
                height: "30px",
                border: "2px solid gray",
                borderRadius: "7px",
                padding: "10px",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* PASSWORD INPUT */}
          <div className="usernamewrapper">
            <h5 style={{ color: "blue" }}>PASSWORD</h5>
            <div style={{ position: "relative", width: "80%" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                style={{
                  width: "100%",
                  height: "20px",
                  border: "2px solid gray",
                  borderRadius: "7px",
                  padding: "10px",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button className="btn" type="submit">LOGIN</button>

          {/* SIGNUP LINK */}
          <div className="loginwrapper">
            <h4 style={{ marginRight: "10px" }}>Don't have an account?</h4>
            <Link to="/" style={{ textDecoration: "none", fontSize: "14px", marginTop: "20px"}}>SIGNUP</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
