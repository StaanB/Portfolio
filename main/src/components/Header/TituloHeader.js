import React from "react";

// importando componentes
import Fade from "react-reveal/Fade";
// Importando React Scroll
import { Link } from "react-scroll";

// Importando imagens
import sImage from "../../assets/s.png";

function TituloHeader() {
  return (
    <div id="titulo_header">
      <Fade right>
        <div>
          <span className="letras_html h1_topo">&lt;h1&gt;</span>
          <h1 className="titulo ola">
            <span>Olá</span>,
          </h1>
        </div>
      </Fade>

      <Fade right>
        <span className="titulo meunome">
          Sou <img src={sImage} alt="Imagem de um S laranja"></img>tanley,
        </span>
      </Fade>

      <Fade right>
        <div>
          <span className="titulo front_end">Desenvolvedor Web</span>
          <span className="letras_html">&lt;/h1&gt;</span>
        </div>
      </Fade>

      
        <div className="div_p">
          <span className="letras_html">&lt;p&gt;</span>

          <Fade right>
            <p id="p">Desenvolvedor Front-End / Desenvolvedor React</p>
          </Fade>

          <span className="letras_html">&lt;/p&gt;</span>
        </div>

      <Fade right>
        <button>
          <Link to="contato" smooth={true} duration={1500}>Contate-me!</Link>
        </button>
      </Fade>
    </div>
  );
}

export default TituloHeader;
