import React from "react";

// Progress bar recebendos props para definir textos e classes
function Progressbar(props) {
  return (
    <div className="progress_bar">
      <div className="progress_fora">
        <div className="progress_dentro">
          <span>{props.tecnologia}</span>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="180px"
          height="180px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#fd9f02" />
              <stop offset="100%" stop-color="#FE630A" />
            </linearGradient>
          </defs>
          <circle className={props.circle} cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  );
}

export default Progressbar;
