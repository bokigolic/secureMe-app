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
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      alert("Invalid PIN!");
    }
  };

  const handleFaceIDLogin = async () => {
    if (!window.PublicKeyCredential) {
      alert("Face ID or biometric authentication is not supported on this device.");
      return;
    }

    try {
      const credentials = await navigator.credentials.get({
        publicKey: {
          challenge: new Uint8Array(32), // Dummy challenge
          allowCredentials: [
            {
              id: new Uint8Array(32), // Dummy credential ID
              type: "public-key",
            },
          ],
          userVerification: "required",
        },
      });

      if (credentials) {
        alert("Face ID login successful!");
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
      } else {
        alert("Face ID login failed!");
      }
    } catch (error) {
      console.error("Face ID error:", error);
      alert("An error occurred during Face ID authentication.");
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
      <button onClick={handleLogin} style={{ marginBottom: "10px", padding: "10px 20px" }}>
        Login with Password
      </button>
      <button onClick={handlePinSubmit} style={{ marginBottom: "10px", padding: "10px 20px" }}>
        Submit PIN
      </button>
      <button onClick={handleFaceIDLogin} style={{ padding: "10px 20px" }}>
        Login with Face ID
      </button>
    </div>
  );
}

export default Login;
