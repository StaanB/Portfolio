import React from "react";

// importando componentes
import Fade from "react-reveal/Fade";

// Seção dos parágrafos de apresentação
function SobreP() {
  return (
    <div id="sobre_paragrafos">
      <Fade bottom>
        <span className="letras_html">&lt;p&gt;</span>
        <p>
          Sou um desenvolvedor Front-End que vive em Salvador-BA, sou muito fã
          de design e como as coisas se ligam na tela depois de apenas algumas
          mudanças no código.
        </p>
        <p>
          No momento procuro uma oportunidade como Júnior, sou bem comunicativo,
          aprendo com facilidade e sei trabalhar bem em equipe e gosto de me
          esforçar quando gosto de algo. Sou fã da cultura japonesa, jogos e da
          tecnologia em geral.
        </p>
        <p>
          Estou interessado em qualquer projeto que envolva front-end, todo dia
          estudo um pouco mais sobre o assunto buscando me aprimorar.
        </p>
      </Fade>
      <Fade bottom>
        <span className="laranja">Me chame pra trabalhar com você!</span>
      </Fade>
      <span className="letras_html">&lt;/p&gt;</span>
    </div>
  );
}

export default SobreP;
