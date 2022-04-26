import React from "react";
// Importando imagens
import sImage from "../../assets/s.png";

// Importando React Scroll
import { Link } from "react-scroll";

function Navtitle() {
  return (
    <div id="nav_header">
      <Link to="header" smooth={true} duration={1500}>
        <img src={sImage} alt="Imagem que tem um S"></img>
      </Link>
      <span id="titulo_span">
        <Link to="header" smooth={true} duration={1500}>
          Stanley
        </Link>
      </span>
      <span id="sub_span">
        <Link to="header" smooth={true} duration={1500}>
          Front-End Developer
        </Link>
      </span>
    </div>
  );
}

export default Navtitle;
