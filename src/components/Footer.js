import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        {/* Leva strana */}
        <div style={leftStyle}>BokiG</div>

        {/* Desna strana */}
        <div style={rightStyle}>
          <a
            href="mailto:golichbojan@gmail.com"
            style={contactLinkStyle}
          >
            Contact Me
          </a>
        </div>
      </div>
    </footer>
  );
};

// Stilovi za footer
const footerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#34344a",
  color: "#FFFFFF",
  padding: "5px 15px", // Smanjena visina
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.2)",
  zIndex: 1000,
};


const footerContentStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

const leftStyle = {
  fontWeight: "bold",
  fontSize: "16px",
};

const rightStyle = {
  display: "flex",
  alignItems: "center",
};

const contactLinkStyle = {
  textDecoration: "none",
  color: "#FFA500", // Zlatna boja
  fontWeight: "bold",
  padding: "5px 10px",
  border: "1px solid #FFA500",
  borderRadius: "5px",
  transition: "background-color 0.3s ease, color 0.3s ease",
  cursor: "pointer",
};

// Efekat na hover
contactLinkStyle[":hover"] = {
  backgroundColor: "#FFA500",
  color: "#FFFFFF",
};

export default Footer;
