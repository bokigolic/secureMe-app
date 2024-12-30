import React, { useState, useEffect } from "react";

function Passwords() {
  const [passwords, setPasswords] = useState([]); // Lista svih sačuvanih lozinki
  const [newEntry, setNewEntry] = useState({ site: "", password: "" }); // Novi unos

  // Učitavamo podatke iz LocalStorage prilikom pokretanja komponente
  useEffect(() => {
    const storedPasswords = localStorage.getItem("passwords");
    if (storedPasswords) {
      setPasswords(JSON.parse(storedPasswords));
    }
  }, []);

  // Čuvanje novih unosa
  const handleAddPassword = () => {
    if (!newEntry.site || !newEntry.password) {
      alert("Please fill in both fields!");
      return;
    }

    const updatedPasswords = [...passwords, newEntry];
    setPasswords(updatedPasswords); // Ažuriramo listu u state
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords)); // Čuvamo u LocalStorage
    setNewEntry({ site: "", password: "" }); // Resetujemo polja
    alert("Password saved!");
  };

  return (
    <div>
      <h1>Manage Your Passwords</h1>

      {/* Forma za unos novog sajta i lozinke */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Site or Company Name"
          value={newEntry.site}
          onChange={(e) =>
            setNewEntry({ ...newEntry, site: e.target.value })
          }
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Password"
          value={newEntry.password}
          onChange={(e) =>
            setNewEntry({ ...newEntry, password: e.target.value })
          }
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAddPassword}>Add</button>
      </div>

      {/* Lista sačuvanih lozinki */}
      <ul>
        {passwords.map((entry, index) => (
          <li key={index}>
            <strong>{entry.site}:</strong> {entry.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Passwords;
