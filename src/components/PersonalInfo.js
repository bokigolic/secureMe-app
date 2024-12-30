import React, { useState, useEffect } from 'react';

function PersonalInfo() {
  const [info, setInfo] = useState({ name: '', surname: '' });

  useEffect(() => {
    const storedInfo = localStorage.getItem('personalInfo');
    if (storedInfo) {
      setInfo(JSON.parse(storedInfo));
    }
  }, []);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem('personalInfo', JSON.stringify(info));
    alert('Personal information saved!');
  };

  return (
    <div>
      <h1>Personal Information</h1>
      <input
        type="text"
        name="name"
        placeholder="First Name"
        value={info.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="surname"
        placeholder="Last Name"
        value={info.surname}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save</button>
      <p>
        <strong>Saved Info:</strong> {info.name} {info.surname}
      </p>
    </div>
  );
}

export default PersonalInfo;
