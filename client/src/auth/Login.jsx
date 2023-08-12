import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const handleRegister = () => navigate("/register");

  const [authenticated, isAuthenticated] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email,
    password,
  };

  const handleform = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/login", user)
      .then((res) =>
        res.data ? isAuthenticated(true) : isAuthenticated(false)
      );

    if (authenticated) {
      navigate("/home", { state: { user: email } });
    } else {
      alert("Wrong Email Or Password")
    }
  };

  return (
    <section>
      <div className="login">
        <div className="loginComponent">
          <h1 id="login">Login</h1>
          <form className="form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email Id..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleform} className="sub">
              submit
            </button>
          </form>

          <p id="registerP">
            Don't have an account?{" "}
            <button className="btnform" onClick={handleRegister}>
              Register
            </button>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
