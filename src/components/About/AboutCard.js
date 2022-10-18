import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a Todos, sou{" "}
            <span className="purple">Wallace Ooliveira S. Lima </span>, moro no{" "}
            <span className="purple"> Rio de Janeiro, Brasil .</span>
            <br />
            Busco me especializar em tecnologia, pois acho que um dia o mundo
            sera revolucionado e haverá varias oportunidades e descobertas
            incriveis
            <br />A cada criação novas oportunidades em um vasto mundo de experiencias e descobertas inovadoras .
            <br />
            <br />No meu tempo livre gosto de :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Desenhar
            </li>
            <li className="about-activity">
              <ImPointRight /> Escutar Musicas
            </li>
            <li className="about-activity">
              <ImPointRight /> Assistir Filmes e Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Um ser humano deve transformar informação em inteligencia ou conhecimento. Tendemos a esquecer que nenhum computador jamais fará uma nova pergunta ."{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
