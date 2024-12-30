import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
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
                <NavLink
                  to="/"
                  className="nav-link"
                  style={({ isActive }) =>
                    isActive ? activeNavLinkStyle : navLinkStyle
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/personal-info"
                  className="nav-link"
                  style={({ isActive }) =>
                    isActive ? activeNavLinkStyle : navLinkStyle
                  }
                >
                  Info
                </NavLink>
                <NavLink
                  to="/passwords"
                  className="nav-link"
                  style={({ isActive }) =>
                    isActive ? activeNavLinkStyle : navLinkStyle
                  }
                >
                  Passwords
                </NavLink>
              </div>
              <button onClick={handleLogout} style={logoutButtonStyle}>
                Logout
              </button>
            </nav>

            <div style={contentStyle}>
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
  height: "100vh",
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#34344a",
  padding: "10px 20px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
};

const navLinkStyle = {
  margin: "0 10px",
  textDecoration: "none",
  color: "#FFFFFF",
  fontSize: "16px",
  padding: "5px 10px",
  transition: "all 0.3s ease",
};

const activeNavLinkStyle = {
  ...navLinkStyle,
  color: "#FFA500",
  borderBottom: "2px solid #FFA500",
};

const logoutButtonStyle = {
  padding: "8px 15px",
  backgroundColor: "#FFA500",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "background-color 0.3s ease",
};

const contentStyle = {
  flex: 1,
  overflowY: "auto",
  padding: "20px",
};

export default App;
