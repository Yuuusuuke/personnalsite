import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./Navbar.scss";

import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

import { useSelector } from "react-redux";

export default function Navbar(){
    const darkMode = useSelector(state => state.darkMode).active;
    let location = useLocation().pathname;

    const addCurrentTag = (page) => {
        return location === page;
    }

    
    return(
        <nav className={`Navbar Navbar--${(darkMode) ? "dark" : "ligth"}`}>
            <div className="Navbar__links">
            <Link to="/">
                <img className="Navbar__links__image" src="/logo316.png" alt="Logo" />
            </Link>
            <Link to="/thes">
                <p className={`Navbar__links__menu${(addCurrentTag("/thes")) ? " current" : ""}`}>Thés</p>
            </Link>
            <Link to="/guildwars">
                <p className={`Navbar__links__menu${(addCurrentTag("/guildwars")) ? " current" : ""}`}>Boss Checker</p>
            </Link>
            <Link to="/sort_team">
                <p className={`Navbar__links__menu${(addCurrentTag("/sort_team")) ? " current" : ""}`}>Organisateur de groupes</p>
            </Link>
            <Link to="/about">
                <p className={`Navbar__links__menu${(addCurrentTag("/about")) ? " current" : ""}`}>A propos</p>
            </Link>
            </div>
            <DarkModeSwitch />
        </nav>
    );
}