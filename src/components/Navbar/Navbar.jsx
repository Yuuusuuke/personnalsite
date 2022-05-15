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
                <p className={`Navbar__links__menu${(addCurrentTag("/guildwars")) ? " current" : ""}`}>Guild Wars 2</p>
            </Link>
            <Link to="/projets">
                <p className={`Navbar__links__menu${(addCurrentTag("/projets")) ? " current" : ""}`}>Projets</p>
            </Link>
            <Link to="/sort_team">
                <p className={`Navbar__links__menu${(addCurrentTag("/sort_team")) ? " current" : ""}`}>Group Sorter</p>
            </Link>
            </div>
            <DarkModeSwitch />
        </nav>
    );
}