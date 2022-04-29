import React from "react";

// Importando imagem da seta
import seta from "../../assets/seta.png";

// Pequenas letrinhas no fundo da página insinuando a rolagem
function Role() {
  return (
    <div className="role">
      <span>
        role <img src={seta} alt="Imagem de uma seta" className="seta"></img>
      </span>
      <span>
        role <img src={seta} alt="Imagem de uma seta" className="seta"></img>
      </span>
    </div>
  );
}

export default Role;
