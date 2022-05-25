import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

import { useSelector } from "react-redux";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Navbar() {
  const darkMode = useSelector((state) => state.darkMode).active;
  let location = useLocation().pathname;

  return (
    <nav className={`Navbar Navbar--${darkMode ? "dark" : "light"}`}>
      <div className="Navbar__links">
        <Link to="/">
          <img className="Navbar__links__image" src="/logo316.png" alt="Logo" />
        </Link>
        <Link
          className={`Navbar__links__menu${
            location === "/thes" ? " current" : ""
          }`}
          to="/thes"
        >
          <p>Thés</p>
        </Link>
        <Link
          className={`Navbar__links__menu${
            location === "/guildwars" ? " current" : ""
          }`}
          to="/guildwars"
        >
          <p>Boss Checker</p>
        </Link>
        <Link
          className={`Navbar__links__menu${
            location === "/sort_team" ? " current" : ""
          }`}
          to="/sort_team"
        >
          <p>Organisateur de groupes</p>
        </Link>
        <Link
          className={`Navbar__links__menu${
            location === "/about" ? " current" : ""
          }`}
          to="/about"
        >
          <p>A propos</p>
        </Link>
      </div>
      <div className="Navbar__buttons">
        <BurgerMenu />
        <DarkModeSwitch />
      </div>
    </nav>
  );
}
