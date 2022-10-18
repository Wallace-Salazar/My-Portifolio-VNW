import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img2 from "../../Assets/img2.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UM POUCO DO MEU <span className="purple"> DESENVOLVIMENTO. </span> "TECNOLOGICO"
            </h1>
            <p className="home-about-body">
              Eu me apaixonei pela programação des dos meus 15 anos, e fui começar a estudar programação somete com 19 anos.
              <br />
              <br />Hoje em dia curso:
              <i>
                <b className="purple"> Front-end, Hardware e Editoração. </b>
              </i>
              <br />
              <br />
              Tenho formação técnica em 
              <i>
                <b className="purple"> Gestão Pública</b> e em áreas como
                {" "}
                <b className="purple">
                  Marketing Financeiro/Pessoal , Administração e tec. Bancário.
                </b>
              </i>
              <br />
              <br />Esse ano, aprendi muito sobre
               <b className="purple"> Fron-end</b> e irei me aprofundar mais em 
              <i>
                <b className="purple">
                  {" "}
                  Robôtica/Hardware . 
                </b>
              </i>
               Além de continuar estudando 
              <i>
                <b className="purple"> Front-end.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={img2} className="img-fluid" alt="img2" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE-ME EM</h1>
            <p>
              Sinta-se livre para <span className="purple">se conectar </span>comigo.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Wallace-Salazar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="linkedin.com/in/wallace-oliveira-lima-434a14225"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.a.l.a.s.a.r?r-nametag"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
