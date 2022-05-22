import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./BurgerMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function BurgerMenu() {
  let location = useLocation().pathname;
  const [showBurgerMenu, setBurgerMenu] = useState(false);
  const burgerRef = useRef(null);

  useEffect(() => {
    // Close the burger menu when we click outside of it
    function handleClickOutside(event) {
      if (
        burgerRef.current &&
        !burgerRef.current.contains(event.target) &&
        showBurgerMenu
      ) {
        setBurgerMenu(!showBurgerMenu);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [burgerRef, showBurgerMenu]);

  return (
    <div
      className="burgerMenu"
      ref={burgerRef}
      onClick={() => setBurgerMenu(!showBurgerMenu)}
    >
      <FontAwesomeIcon icon={faBars} />
      <div
        className={`burgerMenu__content ${
          showBurgerMenu && "burgerMenu__content--show"
        }`}
      >
        <Link
          className={`burgerMenu__content__links ${
            location === "/thes" ? "current" : ""
          }`}
          to="/thes"
        >
          <p>Thés</p>
        </Link>
        <span className="burgerMenu__content__divider"></span>
        <Link
          className={`burgerMenu__content__links ${
            location === "/guildwars" ? "current" : ""
          }`}
          to="/guildwars"
        >
          <p>Boss Checker</p>
        </Link>
        <span className="burgerMenu__content__divider"></span>
        <Link
          className={`burgerMenu__content__links ${
            location === "/sort_team" ? "current" : ""
          }`}
          to="/sort_team"
        >
          <p>Organisateur de groupes</p>
        </Link>
        <span className="burgerMenu__content__divider"></span>
        <Link
          className={`burgerMenu__content__links ${
            location === "/about" ? "current" : ""
          }`}
          to="/about"
        >
          <p>A propos</p>
        </Link>
      </div>
    </div>
  );
}
