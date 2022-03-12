import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./Navbar.scss";

export default function Navbar(){
    let location = useLocation().pathname;

    const addCurrentTag = (page) => {
        return location === page;
    }
    return(
        <nav className="Navbar">
            <Link to="/">
                <img className="Navbar__image" src="./logo316.png" alt="Logo" />
            </Link>
            <Link to="/thes">
                <p className={`Navbar__menu${(addCurrentTag("/thes")) ? " current" : ""}`}>Thés</p>
            </Link>
        </nav>
    );
}