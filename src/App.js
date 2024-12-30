import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PersonalInfo from "./components/PersonalInfo";
import Passwords from "./components/Passwords";
import Login from "./components/Login";
import Footer from "./components/Footer";

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
      <div style={appContainerStyle}>
        {isLoggedIn ? (
          <>
            <nav style={navStyle}>
              <div>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/personal-info" className="nav-link">Info</Link>
                <Link to="/passwords" className="nav-link">Passwords</Link>
              </div>
              <button onClick={handleLogout}>Logout</button>
            </nav>

            <div style={{ flex: 1, overflowY: "auto" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/personal-info" element={<PersonalInfo />} />
                <Route path="/passwords" element={<Passwords />} />
              </Routes>
            </div>
          </>
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )}
        <Footer />
      </div>
    </Router>
  );
}

const appContainerStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh", // Ograničava aplikaciju na visinu ekrana
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#34344a",
  padding: "5px 15px", // Smanjena visina
};


export default App;
