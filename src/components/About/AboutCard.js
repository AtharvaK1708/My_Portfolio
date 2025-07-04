import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left", lineHeight: "1.6" }}>
            Hello! I'm <span className="purple">Atharva Kulkarni</span>, a <b>Software Engineer</b> with a deep enthusiasm for full-stack development, cloud infrastructure, and scalable web technologies.
            <br /><br />
            I recently completed my Master of Science in Computer Science from Syracuse University and am currently working as a Research Intern with the university’s College of Engineering and Computer Science. As part of this role, I’m leading the development of an AI-powered job-matching platform aimed at helping students connect with on-campus opportunities.
            <br /><br />
            Professionally, I’ve also worked as a Software Engineering Intern at Clutch Delivery, where I developed customer-facing tools and delivery management features using React, Node.js, MongoDB, and AWS. I’ve integrated secure payments with Stripe and improved internal efficiency with streamlined admin dashboards. Prior to that, I contributed as a full-stack web developer in India, optimizing REST APIs and enhancing backend performance in production systems built with Spring Boot and PostgreSQL.
            <br /><br />
            My technical toolkit includes React, Node.js, Spring Boot, Java, SQL/MongoDB, and AWS. I enjoy building software that’s not only functional and secure, but also intuitive and scalable. Whether I’m designing backend services or crafting modern UIs, I bring both technical depth and a product-driven mindset to the work.
            <br /><br />

            And yes - I occasionally talk to my code! It’s cheaper than a rubber duck. 😉
          </p>
          

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
