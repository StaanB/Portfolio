import React from "react";
// Importando componentes
import LetrasHtmlTopo from "../Header/LetrasHtmlTopo";
import HabilidadesTexto from "./HabilidadesTexto";
import HabilidadesGraficos from "./HabilidadesGraficos";
import HabilidadesHtmlFim from "./HabilidadesHtmlFim";

// Importando CSS
import "./Habilidades.css";


// Seção de habilidades
function Habilidades() {
  return (
    <section id="habilidades">
      <LetrasHtmlTopo />

      <div id="habilidades_sessoes">
        <HabilidadesTexto />

        <HabilidadesGraficos />

       <HabilidadesHtmlFim/>

      </div>
    </section>
  );
}

export default Habilidades;
