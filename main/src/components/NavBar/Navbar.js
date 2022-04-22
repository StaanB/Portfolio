import React from "react";

// Importando componentes do projeto
import Redessociais from "./Redesociais";
import Sessoes from "./Sessoes";
import Navtitle from "./Navtitle";

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
