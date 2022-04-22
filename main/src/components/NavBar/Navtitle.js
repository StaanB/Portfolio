import React from "react";
// Importando imagens
import sImage from '../../assets/s.png'


function Navtitle(){
    return(
        <div id="nav_header">
        <a href="#header">
          <img src={sImage}></img>
        </a>
        <span id="titulo_span">
          <a href="#header">Stanley</a>
        </span>
        <span id="sub_span">
          <a href="#header">Front-End Developer</a>
        </span>
      </div>
    )
}

export default Navtitle