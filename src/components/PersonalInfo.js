import React, { useState, useEffect } from "react";

function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState([]); // Inicijalizacija sa praznim nizom
  const [newInfo, setNewInfo] = useState("");

  useEffect(() => {
    const storedInfo = localStorage.getItem("personalInfo");
    if (storedInfo) {
      try {
        const parsedInfo = JSON.parse(storedInfo);
        if (Array.isArray(parsedInfo)) {
          setPersonalInfo(parsedInfo); // Postavljamo samo ako je niz
        } else {
          console.error("Stored personal info is not an array.");
          setPersonalInfo([]); // Resetujemo ako nije niz
        }
      } catch (error) {
        console.error("Error parsing personal info:", error);
        setPersonalInfo([]); // Resetujemo ako JSON nije validan
      }
    }
  }, []);

  const handleAddInfo = () => {
    if (!newInfo) {
      alert("Please enter some information!");
      return;
    }

    const updatedInfo = [...personalInfo, newInfo];
    setPersonalInfo(updatedInfo);
    localStorage.setItem("personalInfo", JSON.stringify(updatedInfo));
    setNewInfo("");
  };

  const handleDeleteInfo = (index) => {
    const updatedInfo = personalInfo.filter((_, i) => i !== index);
    setPersonalInfo(updatedInfo);
    localStorage.setItem("personalInfo", JSON.stringify(updatedInfo));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Manage Your Personal Information</h1>
      <input
        type="text"
        placeholder="Enter new info"
        value={newInfo}
        onChange={(e) => setNewInfo(e.target.value)}
        style={{ marginBottom: "10px", padding: "10px", width: "200px" }}
      />
      <br />
      <button onClick={handleAddInfo} style={{ padding: "10px 20px" }}>
        Add Info
      </button>
      <ul style={{ marginTop: "20px", listStyleType: "none", padding: 0 }}>
        {personalInfo.map((info, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {info}{" "}
            <button
              onClick={() => handleDeleteInfo(index)}
              style={{ marginLeft: "10px", padding: "5px 10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonalInfo;
