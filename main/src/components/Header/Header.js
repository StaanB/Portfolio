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
      <LetrasHtmlTopo html="h1" />
      <TituloHeader />

      <Role />
    </div>
  );
}

export default Header;
