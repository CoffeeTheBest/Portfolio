import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import elegant from "../../Assets/Projects/elegant.png";
import overclocked from "../../Assets/Projects/overclocked.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently (More to come ofc).
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elegant}
              isBlog={false}
              title="Elegant Template"
              description="A sleek, modern website template tailored for businesses that want to leave a bold first impression. Built with responsiveness and minimalism at its core, this template features clean layouts, smooth transitions, and a strong focus on branding and usability. Perfect for startups, agencies, or corporate showcases."
              ghLink="https://github.com/CoffeeTheBest/elegantbusiness.github.io"
              demoLink="https://coffeethebest.github.io/elegantbusiness.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={overclocked}
              isBlog={false}
              title="Overclocked"
              description="Overclocked WebApp is a high-performance, gaming-themed e-commerce platform I built during my internship, designed to deliver an immersive shopping experience for tech and gaming enthusiasts. Developed using React, TypeScript, TailwindCSS, Node.js, and MongoDB, it features a bold, neon-lit UI inspired by futuristic setups, complete with JWT-based authentication, role-based logins (admin/user), dynamic product management, and cart functionality. Packed with sleek visuals and built for speed, this project merges clean code with an electrifying user interface to simulate the thrill of shopping in a high-tech gamer’s paradise."
              ghLink="https://github.com/CoffeeTheBest/OverClocked"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
