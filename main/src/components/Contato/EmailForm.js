import React from "react";
// Importando componentes
import { ContactUs } from "./ContactUs";
// Importando Fade Reveal
import Fade from "react-reveal/Fade";

function EmailForm() {
  return (
    <div id="email_form">
      <Fade bottom>
        <div className="titulo_form">
          <span className="letras_html h2">&lt;h2&gt;</span>
          <h2 className="titulo contato">Contate-me</h2>
          <span className="letras_html h2">&lt;/h2&gt;</span>
        </div>
      </Fade>

      <Fade bottom>
        <div className="p_form">
          <span className="letras_html h2">&lt;p&gt;</span>
          <p>
            Estou interessado em qualquer tipo de projeto que envolva front-end,
            se gostou do meu trabalho por favor entre em contato comigo!
          </p>
          <span className="letras_html h2">&lt;/p&gt;</span>
        </div>
      </Fade>

      <div className="contato_form">
        <span className="letras_html h2">&lt;form&gt;</span>
        <ContactUs />
      </div>
    </div>
  );
}

export default EmailForm;
