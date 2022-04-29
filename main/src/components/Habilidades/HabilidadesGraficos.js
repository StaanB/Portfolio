import React from "react";

// Importando componentes
import Progressbar from "./Progressbar";
import Fade from "react-reveal/Fade";

// Seção dos gráficos com as progress bars
function HabilidadesGraficos() {
  return (
    <div id="habilidades_quadros">
      <Fade bottom>
          <Progressbar tecnologia="ReactJS" circle="react"></Progressbar>
      </Fade>

      <Fade bottom>
          <Progressbar tecnologia="Node" circle="node"></Progressbar>
      </Fade>

      <Fade bottom>
          <Progressbar tecnologia="JavaScript" circle="javascript"></Progressbar>
      </Fade>

      <Fade bottom>
          <Progressbar tecnologia="Bootstrap" circle="bootstrap"></Progressbar>
      </Fade>
    </div>
  );
}

export default HabilidadesGraficos;
