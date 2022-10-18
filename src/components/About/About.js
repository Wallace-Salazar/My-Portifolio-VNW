import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";

import Toolstack from "./Toolstack";

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
              paddingBottom: "50px"
            }}
          >
            <img src={img5} alt="img5" className="img-fluid" />
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Um pouco sobre <strong className="purple">Mim</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={img6} alt="img6" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Minhas <strong className="purple">Skillsets </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Ferramentas </strong> que eu uso
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
