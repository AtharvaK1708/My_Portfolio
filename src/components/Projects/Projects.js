import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shuttle from "../../Assets/Projects/shuttle.png";
import eCommerce from "../../Assets/Projects/eCommerce.png"
import aiJobs from "../../Assets/Projects/aiJobs.png"
import courtEvidence from "../../Assets/Projects/courtEvidence.png"
import skinCancer from "../../Assets/Projects/skinCancer.png"
import cryptoverse from "../../Assets/Projects/cryptoverse.png"




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Personal and Academic <strong className="purple">Projects</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shuttle}
              isBlog={false}
              title={<span className="purple">Syracuse University Shuttle Tracker</span>}
              description="As part of a campus mobility initiative, I designed and developed a real-time bus tracking and shuttle request system that facilitated over 100 daily users across the university. Leveraging Java, Spring Boot, and Microsoft SQL Server for the backend, the system enabled students and faculty to request shuttle pickups and monitor their status in real time. To enhance user experience, I built a responsive React-based frontend and implemented an optimized drop-off algorithm that significantly reduced shuttle wait times by 30%. I also ensured system reliability through rigorous RESTful API testing using Postman and applied core design patterns to improve code structure and maintainability—ultimately achieving 95% reliability in shuttle tracking and request fulfillment."
              ghLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiJobs}
              isBlog={false}
              title={<span className="purple">AI-Driven University Career Platform for Internships, Jobs, and Freelance Gigs</span>}
              description="I am currently working on an AI-powered university career platform designed to match students with both structured employment and flexible freelance opportunities. The platform serves a broad range of users—students, professors, departments, and local businesses—by offering intelligent job and gig recommendations using natural language processing (NLP) and machine learning. Students can build detailed profiles, upload resumes, maintain skill-based portfolios, and receive AI-generated match scores and feedback. The system includes dual marketplaces for internships and micro-projects, a research/teaching assistantship matcher, and integrated Stripe-based payment support for freelance work. Built using React, Node.js, PostgreSQL, and AWS, the platform bridges academic potential with practical career growth."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCommerce}
              isBlog={false}
              title={<span className="purple">Vocal for Local: An E-commerce Platform</span>}
              description="In response to the COVID-19 outbreak, I engineered a robust e-commerce platform using the MERN stack (MongoDB, Express, React.js, Node.js) to help local businesses without an online presence sustain and grow their sales. The platform enabled 15+ small vendors to transition to digital storefronts, offering an accessible and efficient channel for reaching customers. I integrated Stripe Checkout to support secure credit and debit card transactions, ensuring a smooth and reliable payment experience. Additionally, I utilized Material UI to accelerate frontend development, delivering a polished, user-friendly interface that allowed rapid onboarding of new vendors."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skinCancer}
              isBlog={false}
              title={<span className="purple">Dermatological Disorder Classification</span>}
              description="I developed a skin cancer classification platform that achieved 85% accuracy by leveraging Convolutional Neural Networks (CNNs) to analyze user-submitted skin lesion images. To enhance model performance, I implemented transfer learning using EfficientNet, which resulted in a 9% improvement in classification accuracy. Prioritizing user privacy, the platform utilized TensorFlow.js to enable real-time, in-browser image analysis—allowing images to be processed directly on the client side without any server-side storage or data transfer. This approach ensured both high performance and secure, privacy-conscious diagnostics for users."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={courtEvidence}
              isBlog={false}
              title={<span className="purple">Blockchain Based Court Evidence Management System</span>}
              description="I developed a blockchain-powered court evidence management system aimed at securing digital legal evidence through transparent, tamper-proof storage. The platform leverages Ethereum smart contracts and IPFS to enable decentralized, verifiable submission and retrieval of court-relevant documents. Legal authorities can register cases, upload evidence, and grant access permissions to relevant parties, all while ensuring traceability and integrity through cryptographic hashing and blockchain immutability. The frontend, built with React, interfaces with a Node.js backend and Web3.js integration, delivering a streamlined experience for lawyers, judges, and investigators. This solution addresses real-world legal system inefficiencies by minimizing document fraud and establishing an auditable chain of custody for digital evidence."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoverse}
              isBlog={false}
              title={<span className="purple">Cryptoverse</span>}
              description="I built a responsive React application that displays real-time cryptocurrency prices and news by integrating RapidAPI’s CoinRanking and Bing News APIs. The app uses React Router for seamless navigation, Redux Toolkit for efficient state management, and Ant Design (AntD) for a polished, user-friendly UI. Axios handles API calls, while millify ensures readable numerical formatting. Users can explore detailed coin stats, market trends, and the latest crypto news—all delivered in a sleek, interactive dashboard optimized for performance and clarity."
              ghLink="#"          
            />
          </Col>
          
          

          
          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
