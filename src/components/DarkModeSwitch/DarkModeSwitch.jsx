import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./DarkModeSwitch.scss";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { switchMode } from "../../redux/darkmode";
import { useDispatch, useSelector } from "react-redux";

export default function DarkModeSwitch(){

    const darkMode = useSelector(state => state.darkMode).active;
    const dispatch = useDispatch();

    return(
        <div className={`buttonDM buttonDM--${(darkMode) ? "moon" : "sun"}`} onClick={() => dispatch(switchMode())}>
            {(darkMode) ? 
            <FontAwesomeIcon className="buttonDM__icon" icon={ faMoon } />
            : 
            <FontAwesomeIcon className="buttonDM__icon" icon={ faSun } />
            }
        </div>
    );
}