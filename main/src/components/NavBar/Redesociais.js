import React from "react";

// Importando fotos
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'

function Redessociais() {
  return (
    <div id="redes_sociais">
      <ul>
        <a href="https://github.com/StaanB" target="_blank">
          <li>
            <img src={github}></img>
          </li>
        </a>

        <a
          href="https://www.linkedin.com/in/stanley-brenner-213989184/"
          target="_blank"
        >
          <li>
            <img src={linkedin}></img>
          </li>
        </a>

        <a href="https://www.instagram.com/staanb/" target="_blank">
          <li>
            <img src={instagram}></img>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Redessociais;
