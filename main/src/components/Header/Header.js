import React from "react";

//Importando componentes
import LetrasHtmlTopo from "./LetrasHtmlTopo";
import TituloHeader from "./TituloHeader";
import Role from "./Role";

// importando CSS
import "./Header.css";

function Header() {
  return (
    <div id="header">
      <LetrasHtmlTopo />

      <TituloHeader />

      <span className="letras_html h1_html_final">&lt;/h1&gt;</span>

      <Role />
    </div>
  );
}

export default Header;
