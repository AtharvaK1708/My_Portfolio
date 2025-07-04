import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import ExperienceCard from "./ExperienceCard";  // Importing the new ExperienceCard
import laptopImg from "../../Assets/about-2.png";
import Toolstack from "./Toolstack";
import EducationCard from "./EducationCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              More About <strong className="purple">Me!</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "200px"}}
            className="about-img"
      
          >
            <img src={laptopImg} alt="about" className="img-fluid" style={{height:300, width: 400, borderRadius: 40, boxShadow: "10px 5px 5px black"}} />
          </Col>
        </Row>
        <Row>
          <ExperienceCard /> {/* Including the ExperienceCard component */}
        </Row>
        <Row>
          <EducationCard /> {/* Including the ExperienceCard component */}
        </Row>
        <h1 className="project-heading">
          Technical <strong className="purple">Skills </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Software</strong> Tools
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
