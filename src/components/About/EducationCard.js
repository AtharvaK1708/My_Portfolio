import React from "react";
import Card from "react-bootstrap/Card";
import syracuselogo from "../../Assets/Syracuse_Orange_logo.svg.png"
import mulogo from "../../Assets/logo_university-of-mumbai.jpg"

// Define styles
const experienceItemStyle = {
  marginBottom: "30px",
  paddingBottom: "25px",
  borderBottom: "1px solid rgba(88, 166, 255, 0.48)",
};

const logoStyle = {
  height: "50px",
  marginRight: "15px",
};

const rowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start", // ensure left alignment
  gap: "15px",
};


function EducationCard() {
  return (
    <Card
      className="quote-card-view"
      style={{
        backgroundColor: "#262626",
        color: "white",
        border: "2px solid #FFFFFF",
        borderRadius: "15px",
        padding: "30px 40px",
        margin: "20px 0",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)"
      }}
    >
      <Card.Body>
        <h2 className="purple" style={{ textAlign: "center", marginBottom: "40px", fontWeight: "bold" }}>
          Education
        </h2>

        <div style={experienceItemStyle}>
          <div style={rowStyle}>
            <img src={syracuselogo} alt="Syracuse University Logo" style={logoStyle} />
            <h3 style={{ fontWeight: "600", marginTop: 10 }}>
              <span className="purple">Syracuse University</span> – Master's of Science in Computer Science
            </h3>
          </div>
          <h5 style={{ fontWeight: "600", marginBottom: "10px", textAlign: "left", paddingTop: 10 }}>
            GPA: 3.67/4.00
          </h5>
          <h5 style={{ color: "#ADB9C7", fontWeight: "bold", marginBottom: "15px", textAlign: "left" }}>
            Syracuse, USA | August 2023 – May 2025
          </h5>
        </div>

        <div style={experienceItemStyle}>
          <div style={rowStyle}>
            <img src={mulogo} alt="Mumbai University Logo" style={logoStyle} />
            <h3 style={{ fontWeight: "600" }}>
              <span className="purple">Mumbai University</span> – Bachelor of Engineering in Computer Engineering
            </h3>
          </div>
          <h5 style={{ fontWeight: "600", marginBottom: "10px", textAlign: "left", paddingTop: 10 }}>
            GPA: 9.41/10.00
          </h5>
          <h5 style={{ color: "#ADB9C7", fontWeight: "bold", marginBottom: "15px", textAlign: "left" }}>
          Mumbai, India | August 2019 – May 2023
          </h5>
        </div>

        
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
