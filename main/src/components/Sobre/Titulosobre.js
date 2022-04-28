import React from "react";

// React Fade
import Fade from "react-reveal/Fade";

function Titulosobre() {
  return (
    <div>
      <Fade bottom>
        <div id="titulo_sobre">
          <h2 className="titulo">Sobre mim</h2>
        </div>
      </Fade>

      <span className="letras_html h2_html_topo">&lt;h2&gt;</span>
      <span className="letras_html h2_html_final">&lt;/h2&gt;</span>
    </div>
  );
}

export default Titulosobre;
