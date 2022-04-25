import React from "react";

// Importando imagens
import sImage from "../../assets/s.png";

function TituloHeader() {
  return (
    <div id="titulo_header">
      <h1 className="titulo ola">
        <span>Olá</span>,
      </h1>

      <span className="titulo meunome">
        Sou <img src={sImage} alt="Imagem de um S laranja"></img>tanley,
      </span>

      <span className="titulo front_end">Desenvolvedor Web</span>

      <div>
          <span className="letras_html">&lt;p&gt;</span>
          <p>Desenvolvedor Front-End / Desenvolvedor React</p>
          <span className="letras_html">&lt;/p&gt;</span>
      </div>

      <button><a href="#contato">Contate-me!</a></button>
    </div>
  );
}

export default TituloHeader;
