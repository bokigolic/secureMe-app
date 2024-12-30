import React, { useState } from "react";
import CONFIG from "../config"; // Uvoz lozinke iz config.js

function Login({ setIsLoggedIn }) {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === CONFIG.PASSWORD) { // Provera lozinke iz config fajla
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "10px", padding: "10px", width: "200px" }}
      />
      <br />
      <button onClick={handleLogin} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Login
      </button>
    </div>
  );
}

export default Login;
