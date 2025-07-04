import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiLinux,
  SiJira,
  SiGit,
  SiGithub,
  SiJson,
  SiWebpack,
  SiHeroku,
  SiStripe,
  SiJsonwebtokens,
  SiFigma
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
          <p style={{color: "#D1E4FF", fontSize: 25, fontWeight: "bold"}}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiGit />
          <p style={{color: "#D1E4FF", fontSize: 25, fontWeight: "bold"}}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
          <p style={{color: "#D1E4FF", fontSize: 25, fontWeight: "bold"}}>Github</p>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
              <SiStripe />
              <p style={{color: "#D1E4FF", fontSize: 25, fontWeight: "bold"}}>Stripe</p>
            </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
          <p style={{color: "#D1E4FF", fontSize: 25, fontWeight: "bold"}}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJsonwebtokens />
        <p style={{color: "#D1E4FF", fontSize: 25, fontWeight: "bold"}}>JSON Web Tokens</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p style={{color: "#D1E4FF", fontSize: 25, fontWeight: "bold"}}>Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiSlack />
          <p style={{color: "#D1E4FF", fontSize: 25, fontWeight: "bold"}}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiJira />
          <p style={{color: "#D1E4FF", fontSize: 25, fontWeight: "bold"}}>Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
          <p style={{color: "#D1E4FF", fontSize: 25, fontWeight: "bold"}}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiHeroku />
          <p style={{color: "#D1E4FF", fontSize: 25, fontWeight: "bold"}}>Heroku</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiJson />
          <p style={{color: "#D1E4FF", fontSize: 25, fontWeight: "bold"}}>JSON</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiWebpack />
          <p style={{color: "#D1E4FF", fontSize: 25, fontWeight: "bold"}}>Webpack</p>
      </Col>
      
    
    </Row>
  );
}

export default Toolstack;
