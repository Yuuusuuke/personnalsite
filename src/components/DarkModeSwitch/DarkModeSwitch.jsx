import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./DarkModeSwitch.scss";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { darkModeContext } from "../../context/DarkModeContext";

export default function DarkModeSwitch(){
    const [darkMode, swapMode] = useContext(darkModeContext);

    return(
        <div className={`buttonDM buttonDM--${(darkMode) ? "moon" : "sun"}`} onClick={() => swapMode(!darkMode)}>
            {(darkMode) ? 
            <FontAwesomeIcon className="buttonDM__icon" icon={ faMoon } />
            : 
            <FontAwesomeIcon className="buttonDM__icon" icon={ faSun } />
            }
        </div>
    );
}