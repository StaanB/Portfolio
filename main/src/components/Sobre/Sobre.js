import React from "react";
// Importando componentes
import LetrasHtmlTopo from "../Header/LetrasHtmlTopo";
import LetrasHtmlFim1 from "./LetrasHtmlFim1";
import Fade from "react-reveal/Fade";

// Importando CSS
import "./Sobre.css";

function Sobre() {
  return (
    <div id="sobre">
      <LetrasHtmlTopo />

      <Fade right>
        <div id="titulo_sobre">
          <h2 className="titulo">Sobre mim</h2>
        </div>
        <span className="letras_html h2_html_topo">&lt;h2&gt;</span>
        <span className="letras_html h2_html_final">&lt;/h2&gt;</span>
      </Fade>

      <div id="sobre_paragrafos">
        <Fade bottom>
          <span className="letras_html">&lt;p&gt;</span>
          <p>
            Sou um desenvolvedor Front-End que vive em Salvador-BA, sou muito fã
            de design e como as coisas se ligam na tela depois de apenas algumas
            mudanças no código.
          </p>
          <p>
            No momento procuro uma oportunidade como Júnior, sou bem
            comunicativo, aprendo com facilidade e sei trabalhar bem em equipe e
            gosto de me esforçar quando gosto de algo. Sou fã da cultura
            japonesa, jogos e da tecnologia em geral.
          </p>
          <p>
            Estou interessado em qualquer projeto que envolva front-end, todo
            dia estudo um pouco mais sobre o assunto buscando me aprimorar.
          </p>
        </Fade>
        <Fade bottom>
          <span className="laranja">Me chame pra trabalhar com você!</span>
        </Fade>
        <span className="letras_html">&lt;/p&gt;</span>
      </div>

      <Fade right>
        <div id="linguagens">
          <div id="posteriores">
            <span className="bottom">Javascript</span>
            <span>CSS</span>
            <span className="bottom">HTML</span>
            <span className="bottom">Bootstrap</span>
            <span>JQuery</span>
            <span className="bottom">NodeJS</span>
          </div>

          <div id="anteriores">
            <span>ReactJS</span>
            <span className="bottom">Firebase</span>
            <span className="bottom">MongoDB</span>
            <span>Npm</span>
          </div>
        </div>
      </Fade>

      <LetrasHtmlFim1 />
    </div>
  );
}

export default Sobre;
