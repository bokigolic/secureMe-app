import React, { useState } from "react";

function Login({ setIsLoggedIn }) {
  const [password, setPassword] = useState("");
  const correctPassword = "mysecretpassword"; // Lozinka (kasnije se može šifrovati)

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsLoggedIn(true); // Ako je lozinka tačna, postavljamo login state na true
      localStorage.setItem("isLoggedIn", "true"); // Čuvamo login status
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;