import React from "react";

// Importando fotos
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'

// Seção com links para minhas redes sociais
function Redessociais() {
  return (
    <div id="redes_sociais">
      <ul>
        <a href="https://github.com/StaanB" target="_blank" rel="noreferrer">
          <li>
            <img src={github} alt="Imagem Github"></img>
          </li>
        </a>

        <a
          href="https://www.linkedin.com/in/stanley-brenner-213989184/"
          target="_blank" rel="noreferrer"
        >
          <li>
            <img src={linkedin} alt="Imagem Linkedin"></img>
          </li>
        </a>

        <a href="https://www.instagram.com/staanb/" target="_blank" rel="noreferrer">
          <li>
            <img src={instagram} alt="imagem Instagram"></img>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Redessociais;
