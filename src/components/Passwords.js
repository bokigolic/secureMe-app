import React, { useState, useEffect } from "react";
import pinConfig from "../pinConfig"; // Import PIN-a iz konfiguracionog fajla

function Passwords() {
  const [passwords, setPasswords] = useState([]);
  const [newEntry, setNewEntry] = useState({ site: "", password: "", category: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPasswords, setFilteredPasswords] = useState([]);
  const [categories, setCategories] = useState(["Work", "Personal", "Social Media"]);
  const [showPasswords, setShowPasswords] = useState(false);
  const [pin, setPin] = useState(""); // PIN za prikaz lozinki
  const [isPinValid, setIsPinValid] = useState(false);

  useEffect(() => {
    const storedPasswords = localStorage.getItem("passwords");
    if (storedPasswords) {
      const parsedPasswords = JSON.parse(storedPasswords);
      setPasswords(parsedPasswords);
      setFilteredPasswords(parsedPasswords);
    }
  }, []);

  useEffect(() => {
    const results = passwords.filter((entry) =>
      entry.site.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPasswords(results);
  }, [searchTerm, passwords]);

  const handleAddPassword = () => {
    if (!newEntry.site || !newEntry.password || !newEntry.category) {
      alert("Please fill in all fields!");
      return;
    }

    const updatedPasswords = [...passwords, newEntry];
    setPasswords(updatedPasswords);
    setFilteredPasswords(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
    setNewEntry({ site: "", password: "", category: "" });
    alert("Password saved!");
  };

  const handleCategoryFilter = (category) => {
    const results = passwords.filter((entry) => entry.category === category);
    setFilteredPasswords(results);
  };

  const handleDeletePassword = (index) => {
    const updatedPasswords = passwords.filter((_, i) => i !== index);
    setPasswords(updatedPasswords);
    setFilteredPasswords(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
  };

  const handlePinSubmit = () => {
    if (pin === pinConfig.configPin) {
      setIsPinValid(true);
      setShowPasswords(true);
      alert("Access granted!");
    } else {
      alert("Invalid PIN! Please try again.");
      setPin("");
    }
  };

  // Stilovi za dugmad
  const buttonStyle = {
    display: "inline-block",
    margin: "5px",
    padding: "5px 15px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    background: "linear-gradient(120deg, #34344a, #505066)",
    color: "white",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    width: "auto",
    textAlign: "center",
  };

  // Stil za dropdown select
  const dropdownStyle = {
    padding: "10px",
    marginRight: "10px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    color: "#333",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    appearance: "none",
    cursor: "pointer",
    backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\"><path fill=\"%23333\" d=\"M0 3h10L5 8z\"/></svg>')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "calc(100% - 10px) center",
    backgroundSize: "10px",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Manage Your Passwords</h1>

      {/* Modal za unos PIN-a */}
      {!isPinValid && (
        <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h3>Enter PIN to view passwords</h3>
          <input
            type="password"
            placeholder="Enter 4-digit PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            maxLength="4"
            style={{ padding: "10px", width: "150px", marginRight: "10px" }}
          />
          <button onClick={handlePinSubmit} style={buttonStyle}>
            Submit
          </button>
        </div>
      )}

      {/* Polje za pretragu */}
      <input
        type="text"
        placeholder="Search by site name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "300px",
        }}
      />

      {/* Forma za unos nove lozinke */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Site or Company Name"
          value={newEntry.site}
          onChange={(e) => setNewEntry({ ...newEntry, site: e.target.value })}
          style={{ marginRight: "10px", padding: "10px" }}
        />
        <input
          type="text"
          placeholder="Password"
          value={newEntry.password}
          onChange={(e) => setNewEntry({ ...newEntry, password: e.target.value })}
          style={{ marginRight: "10px", padding: "10px" }}
        />
        <select
          value={newEntry.category}
          onChange={(e) => setNewEntry({ ...newEntry, category: e.target.value })}
          style={dropdownStyle}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={handleAddPassword} style={buttonStyle}>
          Add
        </button>
      </div>

      {/* Filtriranje po kategorijama */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Filter by Category</h3>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryFilter(category)}
            style={buttonStyle}
          >
            {category}
          </button>
        ))}
        <button
          onClick={() => setFilteredPasswords(passwords)}
          style={buttonStyle}
        >
          Show All
        </button>
      </div>

      {/* Lista sačuvanih lozinki */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredPasswords.map((entry, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>{entry.site} ({entry.category}):</strong>{" "}
            {showPasswords ? entry.password : "****"}
            <button
              onClick={() => handleDeletePassword(index)}
              style={buttonStyle}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Passwords;
