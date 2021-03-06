import React from "react";

// Importando componentes do projeto
import Redessociais from "./Redesociais";
import Sessoes from "./Sessoes";
import Navtitle from "./Navtitle";

// Importando CSS
import "./NavResponsive.css";
import "./NavBar.css";


// Seção de Navbar lateral
function Navbar(props) {
  return (
    <nav id="menu_pc">
      <Navtitle />
      <Sessoes />
      <Redessociais />
    </nav>
  );
}

export default Navbar;
