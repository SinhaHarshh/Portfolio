import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moaisus_logo from "../../Assets/Projects/moaisus_logo.jpeg";
import paultech_logo from "../../Assets/Projects/1631392557895.jpeg";
import leadheight_logo from "../../Assets/Projects/leadheight_logo.jpeg"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Experience I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={moaisus_logo}
    title="Junior Developer"
    duration="August 2024 - Present"
    description="As a Junior Developer Intern at Moaisus, I built and optimized APIs using Go, implemented secure file handling with AWS S3 pre-signed URLs, and enhanced performance through Redis caching strategies. I focused on scalability, tackled complex backend challenges, and ensured clean, efficient code while collaborating with a dynamic team."
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={paultech_logo} // Replace with the correct image path or variable
    title="Software Developer Intern"
    duration="June 2024 - July 2024"
    description="Worked on REST API development using FastAPI, improved system reliability, and collaborated on debugging and optimization. I also gained experience in handling complex backend systems while ensuring secure and scalable applications."
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={leadheight_logo} // Replace with the correct image path or variable
    title="Web Development Intern"
    duration="May 2024 - July 2024"
    description="Developed dynamic and responsive websites using PHP and MySQL, ensured efficient database interactions, and implemented user-friendly interfaces. I also worked on delivering solutions tailored to client needs and gained valuable insights into full-stack development."
  />
</Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
