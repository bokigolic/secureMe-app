import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PersonalInfo from "./components/PersonalInfo";
import Passwords from "./components/Passwords";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        {isLoggedIn ? (
          <>
            <nav style={{ marginBottom: "20px" }}>
              <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
              <Link to="/personal-info" style={{ marginRight: "10px" }}>Personal Info</Link>
              <Link to="/passwords">Passwords</Link>
              <button onClick={handleLogout} style={{ marginLeft: "10px", cursor: "pointer" }}>
                Logout
              </button>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/personal-info" element={<PersonalInfo />} />
              <Route path="/passwords" element={<Passwords />} />
            </Routes>
          </>
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </Router>
  );
}

export default App;
