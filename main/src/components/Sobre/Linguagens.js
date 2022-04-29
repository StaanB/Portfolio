import React from "react";
// Importando Fade Reveal
import Fade from "react-reveal/Fade";

// Nomes das linguagens flutuando ao lado
function Linguagens() {
  return (
    <Fade bottom>
      <div id="linguagens">
        <div id="posteriores">
          <span className="bottom">Javascript</span>
          <span>CSS</span>
          <span className="bottom">ReactJS</span>
          <span className="bottom">Bootstrap</span>
          <span>JQuery</span>
          <span className="bottom">NodeJS</span>
        </div>

        <div id="anteriores">
          <span>HTML</span>
          <span className="bottom">Firebase</span>
          <span className="bottom">MongoDB</span>
          <span>Npm</span>
        </div>
      </div>
    </Fade>
  );
}

export default Linguagens;
