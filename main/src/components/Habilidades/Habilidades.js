import React from "react";
// Importando componentes
import LetrasHtmlTopo from "../Header/LetrasHtmlTopo";

import "./Habilidades.css";

function Habilidades() {
  return (
    <section id="habilidades">
      <LetrasHtmlTopo />

      <div id="habilidades_texto">
        <div id="titulo_habilidades">
          <span className="letras_html">&lt;h2&gt;</span>
          <h2 className="titulo">Habilidades e Experiências</h2>
          <span className="letras_html">&lt;/h2&gt;</span>

          <span className="letras_html">&lt;p&gt;</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <span className="letras_html">&lt;p&gt;</span>
        </div>

        <div id="habilidades_quadros">
          <div>barra de progresso</div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
