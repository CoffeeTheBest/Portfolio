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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cosmicsandbox}
              isBlog={false}
              title="Cosmic Sandbox"
              description="Cosmic Sandbox Sim is an interactive, 3D web app that lets users explore real black holes in a beautifully designed cosmic environment. It combines scientific data with stunning visualizations — letting you select real black holes, view their physical properties, and interact with realistic simulations (event horizon, accretion disk, jets, etc.) in real-time. Built with React, TypeScript, and react-three-fiber, it’s both educational and visually immersive — like playing with a planetarium inside your browser."
              ghLink="https://github.com/CoffeeTheBest/cosmic-sandbox-sim"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enchanted}
              isBlog={false}
              title="Enchanted Tome"
              description="Enchanted Tome is a medieval-themed online bookstore built with React and Tailwind CSS, featuring a magical, polished UI and responsive design. Users can browse, search, and filter books, view featured titles, sign in, toggle themes (light/dark/parchment), and manage a shopping cart — all powered by a modular component system and modern tech stack (React Query, Context API, shadcn/ui). It’s both functional and beautifully immersive, combining solid e-commerce features with a fantasy-inspired aesthetic."
              ghLink="https://github.com/CoffeeTheBest/enchanted-tome"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diagrammatic}
              isBlog={false}
              title="Diagrammatic"
              description="Diagrammatic is a full-stack collaborative flowchart and diagram builder that lets users visually organize ideas on an infinite canvas. It supports rich node types, connectors, real-time editing (with undo/redo), import/export, and is built with a scalable architecture using React, Bun, Encore, and PostgreSQL. With its responsive UI and future-ready multi-user support, it provides a smooth, modern experience for visualizing, collaborating, and creating diagrams."
              ghLink="https://github.com/CoffeeTheBest/Diagrammatic"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
