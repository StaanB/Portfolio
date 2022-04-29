import React from "react";
// Importando imagens
import sImage from "../../assets/s.png";

// Importando React Scroll
import { Link } from "react-scroll";

// Seção do topo da Navbar com letra e apresentação
function Navtitle() {
  return (
    <div id="nav_header">
      <Link to="header" smooth={true} duration={2000}>
        <img src={sImage} alt="Imagem que tem um S"></img>
      </Link>
      <span id="titulo_span">
        <Link to="header" smooth={true} duration={2000}>
          Stanley
        </Link>
      </span>
      <span id="sub_span">
        <Link to="header" smooth={true} duration={2000}>
          Front-End Developer
        </Link>
      </span>
    </div>
  );
}

export default Navtitle;
