import React, { useState } from "react";

function PersonalInfo() {
  const [infoList, setInfoList] = useState([]); // Lista svih informacija
  const [newInfo, setNewInfo] = useState({
    title: "",
    description: "",
    images: [],
  }); // Novi unos

  const handleInputChange = (e) => {
    setNewInfo({ ...newInfo, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + newInfo.images.length > 4) {
      alert("You can upload up to 4 images per info!");
      return;
    }

    const fileReaders = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(fileReaders).then((images) => {
      setNewInfo({ ...newInfo, images: [...newInfo.images, ...images] });
    });
  };

  const handleAddInfo = () => {
    if (!newInfo.title || !newInfo.description) {
      alert("Please fill in both title and description!");
      return;
    }

    setInfoList([...infoList, newInfo]);
    setNewInfo({ title: "", description: "", images: [] }); // Resetovanje polja
  };

  const handleDeleteInfo = (index) => {
    const updatedList = infoList.filter((_, i) => i !== index);
    setInfoList(updatedList);
  };

  const handleDeleteImage = (infoIndex, imageIndex) => {
    const updatedInfoList = [...infoList];
    updatedInfoList[infoIndex].images = updatedInfoList[infoIndex].images.filter(
      (_, i) => i !== imageIndex
    );
    setInfoList(updatedInfoList);
  };

  return (
    <div style={containerStyle}>
      <h1>Manage Your Personal Info</h1>

      {/* Forma za unos nove informacije */}
      <div style={formStyle}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newInfo.title}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newInfo.description}
          onChange={handleInputChange}
          style={{ ...inputStyle, height: "80px" }}
        />
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          style={inputStyle}
        />
        <div style={imagePreviewContainer}>
          {newInfo.images.map((img, index) => (
            <div key={index} style={imagePreviewStyle}>
              <img src={img} alt={`Preview ${index}`} style={imageStyle} />
              <button
                onClick={() => setNewInfo({
                  ...newInfo,
                  images: newInfo.images.filter((_, i) => i !== index),
                })}
                style={deleteButtonStyle}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <button onClick={handleAddInfo} style={addButtonStyle}>
          Add Info
        </button>
      </div>

      {/* Lista unetih informacija */}
      <div style={infoListStyle}>
        {infoList.map((info, index) => (
          <div key={index} style={infoCardStyle}>
            <h3>{info.title}</h3>
            <p>{info.description}</p>
            <div style={imagePreviewContainer}>
              {info.images.map((img, imgIndex) => (
                <div key={imgIndex} style={imagePreviewStyle}>
                  <img
                    src={img}
                    alt={`Info ${index} Image ${imgIndex}`}
                    style={imageStyle}
                  />
                  <button
                    onClick={() => handleDeleteImage(index, imgIndex)}
                    style={deleteButtonStyle}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleDeleteInfo(index)}
              style={deleteButtonStyle}
            >
              Delete Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Stilovi
const containerStyle = {
  textAlign: "center",
  padding: "20px",
};

const formStyle = {
  marginBottom: "20px",
  textAlign: "left",
  margin: "0 auto",
  maxWidth: "400px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const addButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#34344a",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "10px",
};

const deleteButtonStyle = {
  padding: "5px 10px",
  backgroundColor: "red",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "5px",
};

const infoListStyle = {
  marginTop: "20px",
};

const infoCardStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "5px",
  textAlign: "left",
};

const imagePreviewContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
};

const imagePreviewStyle = {
  position: "relative",
};

const imageStyle = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "5px",
};

export default PersonalInfo;
