import React, { useState } from 'react'

function Navbar(props) {

    return (
        <nav>
            <div id='nav_header'>
                <img src='#'></img>
                <span id='titulo_span'>Stanley</span>
                <span id='sub_span'>Front-End Developer</span>
            </div>

            <div id='sessoes'>
                <ul>
                    <li><a  href="#">Sobre</a></li>
                    <li><a href="#">Habilidades</a></li>
                    <li><a href="#">Trabalhos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>

            <div id='redes_sociais'>
                <ul>
                    <li><a><img src='#'></img></a></li>
                    <li><a><img src='#'></img></a></li>
                    <li><a><img src='#'></img></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar