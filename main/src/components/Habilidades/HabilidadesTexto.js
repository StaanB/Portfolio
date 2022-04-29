import React from "react";

// Importando componentes
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";


// titulo principal da sessão e parágrafos
function HabilidadesTexto() {
  return (
    <div id="titulo_habilidades">
      <span className="letras_html">&lt;h2&gt;</span>
      <Fade bottom>
        <h2 className="titulo">Habilidades e Experiências</h2>
      </Fade>
      <span className="letras_html">&lt;/h2&gt;</span>

      <span className="letras_html">&lt;p&gt;</span>
      <Fade bottom>
        <p>
          Comecei a estudar programação em 2021, depois de algum tempo comecei a
          fazer meus primeiros códigos e já fiz alguns projetos como freelancer,
          procuro mais experiências para ser cada dia melhor.
        </p>
      </Fade>
      <Fade bottom>
        <p>
          Já aprendi bastante de back-end, mas tenho interesse sincero em
          front-end, usando ReactJS, Bootstrap, Javascript, fiz algumas landing
          pages e disposto a criar outras.
        </p>
      </Fade>
      <Fade bottom>
        <p>
          Para mais detalhes acesse meu{" "}
          <a
            href="https://www.linkedin.com/in/stanley-brenner-213989184/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>{" "}
          ou entre em{" "}
          <Link to="contato" smooth={true} duration={2000}>
            contato
          </Link>
          .
        </p>
      </Fade >
      <span className="letras_html">&lt;p&gt;</span>
    </div>
  );
}

export default HabilidadesTexto;
