import React, { useState } from "react";
import passwordConfig from "../passwordConfig";
import pinConfig from "../pinConfig";


function Login({ setIsLoggedIn }) {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === passwordConfig.correctPassword) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      alert("Incorrect password!");
    }
  };

  const handlePinSubmit = async () => {
    if (password === pinConfig.configPin) {
      alert("PIN recognized!");
    } else {
      alert("Invalid PIN!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Login</h1>
      <input
        type="password"
        placeholder="Enter password or PIN"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "10px", padding: "10px", width: "200px" }}
      />
      <button onClick={handleLogin} style={{ marginBottom: "20px", padding: "10px 20px" }}>
        Login with Password
      </button>
      <button onClick={handlePinSubmit} style={{ padding: "10px 20px" }}>
        Submit PIN
      </button>
    </div>
  );
}

export default Login;
