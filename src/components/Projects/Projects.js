import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cauculadora from "../../Assets/Projects/cauculadora.png";
import contador from "../../Assets/Projects/contador.png";
import dogpag from "../../Assets/Projects/dogpag.png";
import recipes from "../../Assets/Projects/recipes.png";
import starwars from "../../Assets/Projects/starwars.png";
import starguardian from "../../Assets/Projects/starguardian.png";
import OIP from "../../Assets/Projects/OIP.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong> Recentes.
        </h1>
        <p style={{ color: "white" }}>
          Um pouco do meu crescimento como desenvolvedor.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={OIP}
              isBlog={false}
              title="ONU - ODS"
              description="Esse projeto foi feito para mostrar um pouco sobre minha cidade. "
              link="https://github.com/Wallace-Salazar/onu-vnw"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={cauculadora}
              isBlog={false}
              title="Cauculadora"
              description="Uma cauculadora básica feita com react e java script, atende a varias operações matemáticas de uma forma simples e resumida."
              link="https://github.com/Wallace-Salazar/Cauculadora-Vnw-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contador}
              isBlog={false}
              title="Contador"
              description="Esse projeto, consistiu em fazer um contador de fácil utilização, cuja função seje adcionar ou remover 1 sempre que clicarmos em uma função."
              link="https://github.com/Wallace-Salazar/Desafio06-React-contador"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dogpag}
              isBlog={false}
              title="Dog Page"
              description="Essa pag. consite em gerar um dog aleatorio. Foi um dos desafios do curso de denver, projetado com react."
              link="https://github.com/Wallace-Salazar/Amigao2.0-VNW"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starwars}
              isBlog={false}
              title="Star Wars"
              description="Esse foi o desafio final do modulo 1, cujo objetivo era recriar uma imagem em formato de site utilizando apenas HTML e CSS, obtive varios aprendizados com esse projeto."
              link="https://github.com/Wallace-Salazar/Star-Wars--Desafio-Final-VNW"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipes}
              isBlog={false}
              title="Recipes"
              description="O objetivo desse desafio foi testar nosso crescimento e descobrir como seriamos tendo que trabalhar em conjunto com outra pessoa. Foi inspirador e de grande aprendizado."
              link="https://github.com/Wallace-Salazar/MyPortifolio-2022"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starguardian}
              isBlog={false}
              title="Star Guardians"
              description="Site criado com tema livre cujo objetivo era desenvolver o conhecimento em Js. Apenas um site para ver as novas skins Star Guardians do Leagle Of Legends. "
              link="https://github.com/Wallace-Salazar/04-Desafio-react"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
