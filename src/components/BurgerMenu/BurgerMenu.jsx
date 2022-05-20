import React, { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom";
import "./BurgerMenu.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function BurgerMenu(){
    const [showBurgerMenu, setBurgerMenu] = useState(false);
    const burgerRef = useRef(null);

    useEffect(() => { // Close the burger menu when we click outside of it
        function handleClickOutside(event){
            if(burgerRef.current && !burgerRef.current.contains(event.target) && showBurgerMenu){
                setBurgerMenu(!showBurgerMenu);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [burgerRef, showBurgerMenu]);

    const openBurger = (e) => {
        setBurgerMenu(!showBurgerMenu);
    }

    return(
        <div className="burgerMenu" ref={burgerRef} onClick={(e) => openBurger(e)}>
            <FontAwesomeIcon  icon={faBars} />
            <div className={`burgerMenu__content ${showBurgerMenu && "burgerMenu__content--show"}`}>
            <Link className={`burgerMenu__content__links`} to="/thes">
                <p>Thés</p>
            </Link>
            <span className="burgerMenu__content__divider"></span>
            <Link className={`burgerMenu__content__links`} to="/guildwars">
                <p>Boss Checker</p>
            </Link>
            <span className="burgerMenu__content__divider"></span>
            <Link className={`burgerMenu__content__links`} to="/sort_team">
                <p>Organisateur de groupes</p>
            </Link>
            <span className="burgerMenu__content__divider"></span>
            <Link className={`burgerMenu__content__links`} to="/about">
                <p>A propos</p>
            </Link>
            </div>
        </div>
    );
}