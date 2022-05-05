import React from "react";

//Importando componentes
import LetrasHtmlTopo from "./LetrasHtmlTopo";
import TituloHeader from "./TituloHeader";
import Role from "./Role";

// importando CSS
import "./HeaderResponsive.css"
import "./Header.css";


// Seção Header, principal da página
function Header() {
  return (
    <section id="header">
      <LetrasHtmlTopo />

      <TituloHeader />

      <Role />
    </section>
  );
}

export default Header;
