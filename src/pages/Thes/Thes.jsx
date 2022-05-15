import React from "react";
import "./Thes.scss";
import { useSelector } from "react-redux";

export default function Thes(){
    const darkMode = useSelector(state => state.darkMode).active;

    return(
        <div className={`thesBackground thesBackground--${(darkMode) ? "dark" : "light"}`}>
            <div className="thesContainer container">
                <h1 className="thesContainer__title">Liste des thés</h1>
                <p className="thesContainer__subTitle">
                    Cette liste comprends uniquement les thés qui ont été les plus appréciés et ne comprends pas forcément tous les types de thés
                </p>

                <div className="thesContainer__table">
                    
                </div>
            </div>
        </div>
    );
}