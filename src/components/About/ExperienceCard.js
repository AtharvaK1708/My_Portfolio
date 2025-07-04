import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

// Define styles for experience items
const experienceItemStyle = {
  marginBottom: "30px",
  paddingBottom: "25px",
  borderBottom: "1px solid rgba(88, 166, 255, 0.48)",
};

// Define styles for the last experience item (no border)


// Define styles for list items
const listItemStyle = {
  marginBottom: "10px",
  display: "flex",
  alignItems: "flex-start"
};

// Define styles for the icon
const iconStyle = {
  color: "white",
  marginRight: "10px",
  marginTop: "4px"
};

function ExperienceCard() {
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
          Work Experience
        </h2>
        
        <div style={experienceItemStyle}>
          <h3 className="purple" style={{ textAlign: "left", fontWeight: "600", marginBottom: "10px" }}>
            Clutch Delivery — Software Engineering Intern
          </h3>
          <h5 style={{ color: "#ADB9C7", textAlign: "left", fontStyle: "bold", marginBottom: "15px" }}>
            Syracuse, New York | May 2024 - August 2024
          </h5>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              textAlign: "left",
              marginTop: "10px"
            }}
          >
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Boosted user engagement by 40% by designing and developing microservices-based customer-facing website, mobile
              app, delivery partner app and admin panel using Figma, React.js, Redux, focusing on state management
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} />Improved reliability, API performance by building the backend using Node.js, Express and MongoDB, integrating
              Amazon S3 for efficient storage, and adding a CI/CD pipeline with Vercel for automated builds and unit testing
              </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Elevated customer retention by 20% by launching redesigned platforms with Stripe Checkout for seamless payments
              and implementing OAuth 2.0 and JWT tokens for secure authentication
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Reduced delivery costs by 15% and delivery times by 20% by implementing an optimized assignment algorithm, while also onboarding 20+ restaurants through product demos and API integration walkthroughs to support adoption and streamline operations.
            </li>
          </ul>
        </div>
        
        <div style={experienceItemStyle}>
          <h3 className="purple" style={{ textAlign: "left", fontWeight: "600", marginBottom: "10px" }}>
            TCR Innovation — Full-Stack Web Developer Intern
          </h3>
          <h5 style={{ color: "#ADB9C7", textAlign: "left", fontStyle: "bold", marginBottom: "15px" }}>
            Mumbai, India | January 2022 - March 2022
          </h5>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              textAlign: "left",
              marginTop: "10px"
            }}
          >
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Engineered a responsive and modular front-end for a travel agency website using React.js, Tailwind CSS, React Hooks,
              and Redux, optimizing performance, and maintainability
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Increased overall traffic by 35% by designing a scalable backend with PostgreSQL, Node.js, and Express, allowing
              CRUD operations for efficient booking workflows and improved data handling
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Improved API response time by 30% by implementing query optimization, database indexing, and efficient caching
              strategies on frequently accessed endpoints
            </li>
           
          </ul>
        </div>
        
        <div style={experienceItemStyle}>
          <h3 className="purple" style={{ textAlign: "left", fontWeight: "600", marginBottom: "10px" }}>
            The Sparks Foundation — Web Development Intern
          </h3>
          <h5 style={{ color: "#ADB9C7", textAlign: "left", fontStyle: "Bold", marginBottom: "15px" }}>
            Mumbai, India | December 2021 - January 2022
          </h5>
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "0",
              textAlign: "left",
              marginTop: "10px"
            }}
          >
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Improved REST API response time by 35% and reduced database query latency by optimizing schema design and
              refactoring backend logic for a banking website using Java Spring Boot and PostgreSQL
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Increased backend scalability and secure session handling for 1,000+ banking users by implementing JWT-based
              stateless authentication and role-based access control
            </li>
            <li style={listItemStyle}>
              <ImPointRight style={iconStyle} /> Strengthened transaction integrity and auditability by designing secure, rate-limited RESTful endpoints with detailed
              activity logging and data validation, reducing critical API failures by 20%
            </li>
            
          </ul>
        </div>
        
        
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
