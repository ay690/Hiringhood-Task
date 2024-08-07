import React, { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "aniket" && password === "test") {
      alert("Login succesfull");
    } else {
      alert("Incorrect credentails");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login Page</h2>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter Name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="login-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
