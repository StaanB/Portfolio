import React from "react";
// Importando imagens
import mapa from "../../assets/mapa_salvador.png";
import pin_mapa from "../../assets/pin_mapa.png";
// Importando Fade Reveal
import Fade from "react-reveal/Fade";

function FormMapa() {
  return (
    <Fade bottom>
      <div id="mapa">
        <img src={mapa} className="mapa" alt="Mapa de Salvador e regiões"></img>
        <img
          src={pin_mapa}
          className="pin_mapa"
          alt="Pin mapa de localização"
        ></img>
      </div>
    </Fade>
  );
}

export default FormMapa;
