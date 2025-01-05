import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
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
  I discovered my passion for programming during my journey as a tech enthusiast, and it has been an exciting adventure ever since! 🚀
  <br />
  <br />I am proficient in technologies like
  <i>
    <b className="purple"> Go, JavaScript, and PHP </b>
  </i>
  with experience in backend development and API development.
  <br />
  <br />
  My areas of interest include creating efficient and scalable
  <i>
    <b className="purple"> APIs and Web Applications </b>
  </i>
  and exploring domains like{" "}
  <b className="purple">Cloud Computing and Caching Strategies.</b>
  <br />
  <br />
  I enjoy developing solutions with <b className="purple">Node.js</b> and
  <i>
    <b className="purple"> modern frontend libraries and frameworks </b>
  </i>
  like
  <i>
    <b className="purple"> React.js </b>
  </i>
  to craft dynamic user experiences.
  <br />
  <br />
  Besides programming, I have also represented my school and college in
  <i>
    <b className="purple"> Kabaddi and Cricket </b>
  </i>
  events, reflecting my enthusiasm for teamwork and strategy both on and off the field.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SinhaHarshh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harsh-kumar-b95425285/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
