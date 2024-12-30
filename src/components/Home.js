import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [passwordsCount, setPasswordsCount] = useState(0);
  const [personalInfoCount, setPersonalInfoCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Učitavanje broja lozinki
    const storedPasswords = localStorage.getItem("passwords");
    if (storedPasswords) {
      setPasswordsCount(JSON.parse(storedPasswords).length);
    }

    // Učitavanje broja ličnih podataka
    const storedPersonalInfo = localStorage.getItem("personalInfo");
    if (storedPersonalInfo) {
      setPersonalInfoCount(JSON.parse(storedPersonalInfo).length);
    }

    // Učitavanje slike iz LocalStorage
    const storedImage = localStorage.getItem("selectedImage");
    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageBase64 = reader.result;
        setSelectedImage(imageBase64); // Postavljamo sliku u state
        localStorage.setItem("selectedImage", imageBase64); // Čuvamo sliku u LocalStorage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={homeContainerStyle}>
      {/* Klikabilna slika */}
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
          <img
            src={selectedImage || "https://via.placeholder.com/120"}
            alt="App Logo"
            style={logoStyle}
          />
        </label>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>

      {/* Naslov */}
      <h1 style={titleStyle}>Welcome to Your Personal Data Manager</h1>

      {/* Interaktivna kontrolna tabla */}
      <div style={dashboardContainerStyle}>
        <div style={dashboardItemStyle}>
          <h3>Saved Passwords</h3>
          <p>{passwordsCount}</p>
        </div>
        <div style={dashboardItemStyle}>
          <h3>Personal Info Entries</h3>
          <p>{personalInfoCount}</p>
        </div>
      </div>

      {/* Dugmad za brzi pristup */}
      <div style={{ marginTop: "30px" }}>
        <button
          style={quickAccessButtonStyle}
          onClick={() => navigate("/passwords")}
        >
          Manage Passwords
        </button>
        <button
          style={quickAccessButtonStyle}
          onClick={() => navigate("/personal-info")}
        >
          Update Personal Info
        </button>
      </div>
    </div>
  );
}

/* Stilovi */
const homeContainerStyle = {
  textAlign: "center",
  maxWidth: "500px",
  margin: "0 auto",
  padding: "20px",
  background: "white",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
};

const dropdownStyle = {
  padding: "10px",
  marginRight: "10px",
  fontSize: "14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  background: "linear-gradient(120deg, #ffffff, #f3f3f3)",
  color: "#333",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  appearance: "none", // Skida podrazumevani stil browsera
  cursor: "pointer",
};

const dropdownHoverStyle = {
  ...dropdownStyle,
  background: "linear-gradient(120deg, #e3e3e3, #f5f5f5)",
  borderColor: "#aaa",
};


const logoStyle = {
  borderRadius: "50%",
  width: "120px",
  height: "120px",
};

const titleStyle = {
  fontSize: "24px",
  marginBottom: "20px",
  color: "#333",
};

const dashboardContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "20px",
};

const dashboardItemStyle = {
  background: "linear-gradient(120deg, #34344a, #505066)",
  color: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  width: "120px",
  textAlign: "center",
};

const quickAccessButtonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  margin: "10px",
  background: "linear-gradient(45deg, #34344a, #505066)",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "transform 0.3s, background-color 0.3s",
};

quickAccessButtonStyle["&:hover"] = {
  transform: "scale(1.05)",
};



export default Home;
