import React from "react";

// React Scroll
import {Link} from "react-scroll";


// Sessões para acesso as partes da página
function Sessoes() {
  
  return (
    <div id="sessoes">
      <ul>
        <li>
          <Link className="componente_lista" to="sobre" smooth={true} duration={2000}>
            Sobre
          </Link>
        </li>
        <li>
          <Link className="componente_lista" to="habilidades" smooth={true} duration={2000}>
            Habilidades
          </Link>
        </li>
        <li>
          <Link className="componente_lista" to="trabalhos" smooth={true} duration={2000}>
            Trabalhos
          </Link>
        </li>
        <li>
          <Link className="componente_lista" to="contato" smooth={true} duration={2000}>
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sessoes;
