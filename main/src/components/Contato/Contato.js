import React from "react";

// Importando CSS
import "./Contato.css";

// Importando componentes
import LetrasHtmlTopo from "../Header/LetrasHtmlTopo";

function Contato() {
  return (
    <div id="contato">
      <LetrasHtmlTopo />

      <div id="email_form">
        <h2 className="titulo contato">
          <span className="letras_html">&lt;h2&gt;</span>Contate-me
          <span className="letras_html">&lt;/h2&gt;</span>
        </h2>
        <input className="input" type="text" placeholder="Nome"></input>
        <input className="input" type="email" placeholder="Email"></input>
        <input className="input msg" type="text" placeholder="Mensagem"></input>
      </div>

      <div id="mapa"></div>
    </div>
  );
}

export default Contato;
