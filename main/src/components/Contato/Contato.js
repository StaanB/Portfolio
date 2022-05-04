import React from "react";

// Importando CSS
import "./Contato.css";

// Importando componentes
import LetrasHtmlTopo from "../Header/LetrasHtmlTopo";
import EmailForm from "./EmailForm";
import FormMapa from "./FormMapa"

function Contato() {
  return (
    <div id="contato">
      <LetrasHtmlTopo />

      <EmailForm />

      <FormMapa />
    </div>
  );
}

export default Contato;
