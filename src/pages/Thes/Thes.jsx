import React, { useContext } from "react";
import "./Thes.scss";

import { darkModeContext } from "../../context/DarkModeContext";

export default function Thes(){
    const [darkMode] = useContext(darkModeContext);

    return(
        <div className={`thesBackground thesBackground--${(darkMode) ? "dark" : "light"}`}>

            <div className={`thesContainer thesContainer--${(darkMode) ? "dark" : "light"} container`}>

            </div>
        </div>
    );
}