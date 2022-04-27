import React from "react";

// React Scroll
import {Link} from "react-scroll";



function Sessoes() {
  
  return (
    <div id="sessoes">
      <ul>
        <li>
          <Link className="componente_lista" to="sobre" smooth={true} duration={1500}>
            Sobre
          </Link>
        </li>
        <li>
          <Link className="componente_lista" to="habilidade" smooth={true} duration={1500}>
            Habilidades
          </Link>
        </li>
        <li>
          <Link className="componente_lista" to="trabalhos" smooth={true} duration={1500}>
            Trabalhos
          </Link>
        </li>
        <li>
          <Link className="componente_lista" to="contato" smooth={true} duration={1500}>
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sessoes;
