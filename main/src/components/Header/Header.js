import React from "react";

//Importando componentes
import LetrasHtmlTopo from "./LetrasHtmlTopo";
import TituloHeader from "./TituloHeader";
import Role from "./Role";

// importando CSS
import "./Header.css";

// Seção Header, principal da página
function Header() {
  return (
    <section id="header">
      <LetrasHtmlTopo html="h1" />

      <TituloHeader />

      <Role />
    </section>
  );
}

export default Header;
