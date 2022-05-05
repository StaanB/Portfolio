import React from "react";

// importando componentes
import Slide from "react-reveal/Slide";
// Importando React Scroll
import { Link } from "react-scroll";

// Importando imagens
import sImage from "../../assets/s.png";

// Titulo principal com os textos e animações
function TituloHeader() {
  return (
    <div id="titulo_header">
      <Slide bottom>
        <div>
          <span className="letras_html h1_topo">&lt;h1&gt;</span>
          <h1 className="titulo ola">
            Olá,
          </h1>
        </div>
        <h1 className="titulo meunome">
          Sou <img src={sImage} alt="Imagem de um S laranja"></img>tanley,
        </h1>
        <div>
          <h1 className="titulo front_end">Desenvolvedor Web</h1>
          <span className="letras_html">&lt;/h1&gt;</span>
        </div>
        <div className="div_p">
          <span className="letras_html">&lt;p&gt;</span>
          <p id="p">Desenvolvedor Front-End / Desenvolvedor React</p>
          <span className="letras_html">&lt;/p&gt;</span>
        </div>
      </Slide>

      <button>
        <Slide bottom>
          <Link to="contato" smooth={true} duration={1500}>
            Contate-me!
          </Link>
        </Slide>
      </button>
    </div>
  );
}

export default TituloHeader;
