import React, { useState } from 'react'

// Importando minhas imagens 
import sImage from '../assets/s.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'

function Navbar(props) {

    return (
        <nav>
            <div id='nav_header'>
                    <a href="#"><img src={sImage}></img></a>
                    <span id='titulo_span'><a href="#">Stanley</a></span>
                    <span id='sub_span'><a href="#">Front-End Developer</a></span>
            </div>

            <div id='sessoes'>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Habilidades</a></li>
                    <li><a href="#">Trabalhos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>

            <div id='redes_sociais'>
                <ul>
                    <a href="https://github.com/StaanB" target="_blank">
                        <li><img src={github}></img></li>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/stanley-brenner-213989184/" target='_blank'>
                        <li><img src={linkedin}></img></li>
                    </a>
                    
                    <a href="https://www.instagram.com/staanb/" target='_blank'>
                        <li><img src={instagram}></img></li>
                    </a>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar