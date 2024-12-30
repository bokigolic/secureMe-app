import React, { useState, useEffect } from "react";

function Passwords() {
  const [passwords, setPasswords] = useState([]);
  const [newEntry, setNewEntry] = useState({ site: "", password: "" });

  useEffect(() => {
    const storedPasswords = localStorage.getItem("passwords");
    if (storedPasswords) {
      setPasswords(JSON.parse(storedPasswords));
    }
  }, []);

  const handleAddPassword = () => {
    if (!newEntry.site || !newEntry.password) {
      alert("Please fill in both fields!");
      return;
    }

    const updatedPasswords = [...passwords, newEntry];
    setPasswords(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
    setNewEntry({ site: "", password: "" });
    alert("Password saved!");
  };

  const handleDeletePassword = (index) => {
    const updatedPasswords = passwords.filter((_, i) => i !== index);
    setPasswords(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Manage Your Passwords</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Site or Company Name"
          value={newEntry.site}
          onChange={(e) => setNewEntry({ ...newEntry, site: e.target.value })}
          style={{ marginRight: "10px", padding: "10px", width: "150px" }}
        />
        <input
          type="text"
          placeholder="Password"
          value={newEntry.password}
          onChange={(e) => setNewEntry({ ...newEntry, password: e.target.value })}
          style={{ marginRight: "10px", padding: "10px", width: "150px" }}
        />
        <button onClick={handleAddPassword} style={{ padding: "10px 20px", cursor: "pointer" }}>
          Add
        </button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {passwords.map((entry, index) => (
          <li key={index} style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
            <span>
              <strong>{entry.site}:</strong> {entry.password}
            </span>
            <button
              onClick={() => handleDeletePassword(index)}
              style={{ padding: "5px 10px", cursor: "pointer" }}
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
