import React from "react";

// Importando componentes do projeto
import Redessociais from "./Redesociais";
import Sessoes from "./Sessoes";
import Navtitle from "./Navtitle";


// Importando CSS
import "./NavBar.css"

function Navbar(props) {
  return (
    <nav>
      <Navtitle />
      <Sessoes />
      <Redessociais />
    </nav>
  );
}

export default Navbar;
