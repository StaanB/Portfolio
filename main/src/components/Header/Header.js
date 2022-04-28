import React from "react";

//Importando componentes
import Fade from "react-reveal/Fade";
import LetrasHtmlTopo from "./LetrasHtmlTopo";
import TituloHeader from "./TituloHeader";
import Role from "./Role";

// importando CSS
import "./Header.css";

function Header() {
  return (
    <section id="header">
      <Fade right>
        <LetrasHtmlTopo html="h1" />
      </Fade>
      
      <TituloHeader />

      <Role />
    </section>
  );
}

export default Header;
