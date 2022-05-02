import React from "react";

// Importando CSS
import "./Trabalhos.css";

// Importando imagens
import laFatieMin from "../../assets/la_fatie_miniatura.png";
import laFatieExp from "../../assets/la_fatie_expandido.png";

// Importando componentes
import { motion } from "framer-motion";
import { useState } from "react";
import Semcard from "./Semcard";

function Trabalhos() {
  const [lafatie, ClicouLafatie] = useState(false);

  return (
    <section id="trabalhos">
      <div className="card_section">
        <motion.div className="card" onClick={() => ClicouLafatie(!lafatie)}>
          <motion.img src={laFatieMin}></motion.img>
        </motion.div>

        {lafatie && (
          <motion.div className="card_clicado" animate={{ x: 100 }}>
            <motion.img
              animate={{ scale: [0, 1.2, 1] }}
              src={laFatieExp}
            ></motion.img>
          </motion.div>
        )}

        <Semcard />

        <Semcard />
      </div>

      <div className="card_section">
        <Semcard />

        <Semcard />

        <Semcard />
      </div>
    </section>
  );
}

export default Trabalhos;
