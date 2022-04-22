import React from "react";
import sImage from '../../assets/s.png'

function Header() {
  return (
    <div id="header">
      
      <span className="letras_html html_topo">&lt;html&gt;</span>
      <span className="letras_html body_topo">&lt;body&gt;</span>
      <span className="letras_html h1_topo">&lt;h1&gt;</span>

      <h1 className="titulo ola"><span>Olá</span>,</h1>
      
      <h1 className="titulo meunome">Sou <img src={sImage}></img>tanley,</h1>
      
      <span className="titulo front_end">Desenvolvedor Web</span>

      <span></span>
    </div>
  );
}

export default Header;
