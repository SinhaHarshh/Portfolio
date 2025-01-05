import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hi Everyone, I am <span className="purple"> Harsh Kumar </span> 
      from <span className="purple"> India.</span>
      <br />
      I am currently a Junior Developer Intern at <span className="purple">Moaisus</span>, 
      working on Go, API development, and AWS bucket handling.
      <br />
      I am pursuing a BTech in CSIT and have gained hands-on experience in backend development, 
      caching strategies, and working with cloud services like AWS.
      <br />
      <br />
      Apart from coding, some other activities that I love to do!
    </p>
    <ul>
      <li className="about-activity">
        <ImPointRight /> Playing Kabaddi and Cricket
      </li>
      <li className="about-activity">
        <ImPointRight /> Exploring new technologies
      </li>
      <li className="about-activity">
        <ImPointRight /> Attending tech webinars and talks
      </li>
    </ul>

    <p style={{ color: "rgb(155 126 172)" }}>
      "Keep learning, keep growing, and aim to make an impact!"{" "}
    </p>
    <footer className="blockquote-footer">Harsh Kumar</footer>
  </blockquote>
</Card.Body>

    </Card>
  );
}

export default AboutCard;
