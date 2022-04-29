import React from "react";
// Importando componentes
import LetrasHtmlTopo from "../Header/LetrasHtmlTopo";
import Titulosobre from "./Titulosobre";
import SobreP from "./SobreP";
import Linguagens from "./Linguagens";
import LetrasHtmlFim1 from "./LetrasHtmlFim1";

// Importando CSS
import "./Sobre.css";

// Seção Sobre
function Sobre() {
  return (
    <section id="sobre">
      <LetrasHtmlTopo />

      <Titulosobre />

      <SobreP />

      <Linguagens />

      <LetrasHtmlFim1 />
    </section>
  );
}

export default Sobre;
