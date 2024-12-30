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
            <nav>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/personal-info" className="nav-link">Info</Link>
              <Link to="/passwords" className="nav-link">Passwords</Link>
              <button onClick={handleLogout}>Logout</button>
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
