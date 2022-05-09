import React, { useRef, useState } from "react";

// Importando imagens
import menu_mobile from "../../assets/menu_mobile.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
// Importando componentes
import { Link } from "react-scroll";
// importando CSS
import "./NavBar.css";

function MenuMobile() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  console.log(isActive);

  return (
    <div id="menu_mobile">
      <button onClick={onClick} className="menu_button">
        <img src={menu_mobile} alt="Botão do menu mobile"></img>
      </button>

      <nav
        className={`menu ${isActive ? "active" : "inactive"}`}
        ref={dropDownRef}
      >
        <ul>
          <li>
            <Link
              className="componente_lista"
              to="header"
              smooth={true}
              duration={2000}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="componente_lista"
              to="sobre"
              smooth={true}
              duration={2000}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              className="componente_lista"
              to="habilidades"
              smooth={true}
              duration={2000}
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              className="componente_lista"
              to="trabalhos"
              smooth={true}
              duration={2000}
            >
              Trabalhos
            </Link>
          </li>
          <li>
            <Link
              className="componente_lista"
              to="contato"
              smooth={true}
              duration={2000}
            >
              Contato
            </Link>
          </li>
        </ul>

        <div className="mobile_sociais">
          <a href="https://github.com/StaanB" target="_blank" rel="noreferrer">
            <img src={github} alt="Imagem Github"></img>
          </a>

          <a
            href="https://www.linkedin.com/in/stanley-brenner-213989184/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Imagem Linkedin"></img>
          </a>

          <a
            href="https://www.instagram.com/staanb/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="imagem Instagram"></img>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default MenuMobile;
