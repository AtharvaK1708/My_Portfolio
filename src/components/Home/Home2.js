import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A passionate software engineer with a focus on
              
              
                <b className="purple"> Full-Stack Web Development, UI/UX Designing, Cloud Computing and Machine Learning.</b>
              
              <br />
              <br />
              <p>I recently completed my <b className="purple">Master’s in Computer Science at Syracuse University</b>, where I worked on real-world projects that combined practical problem-solving with robust technical design. I aim to build reliable, user-centric software that delivers meaningful impact.</p>
              <br />
              
              <p>
              Proficient in tools and frameworks like <b className="purple">React, Node.js, SQL and MongoDB databases, Java, Spring Boot, and AWS</b>, I focus on building modern web platforms and backend systems that are fast, secure, and easy to scale.
              </p>
              <br />
              <p>My expertise lies in designing and implementing scalable cloud solutions, 
                developing data-driven applications, and leveraging machine learning to solve complex problems. 
                I'm always eager to learn and explore new technologies, and I'm committed to continuous professional growth.</p>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{height: "380px", width: "320px"}}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2><b className="purple">Let's Chat!</b> Connect with me on: </h2>
           
            <ul className="home-about-social-links">
              
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/atharvak1708/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/AtharvaK1708"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/atharva_kulkarni17/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:atharva.kulkarni21@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
