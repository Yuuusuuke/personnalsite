import React, { useState, useContext } from "react";
import "./SortTeam.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import { darkModeContext } from "../../context/DarkModeContext";

export default function SortTeam(){
    document.title = "Yuusuke - Group Sorter";
    const [darkMode] = useContext(darkModeContext);

    const [inputError, setInputError] = useState("");
    const [listPseudo, setListPseudo] = useState([]);
    const [groupsSorted, setGroupsSorted] = useState([]);
    const [numberGroups, setNumberGroups] = useState(0);

    const handleKeyDown = (event) =>{
        if(event.key === "Enter"){
            if(/^\S+/.test(event.target.value)){
                let tmp = event.target.value;
                setInputError("");
                setListPseudo(array => [...array, tmp]);
                event.target.value = "";
            }
            else{
                setInputError(" sorter__input--error");
            }
        }
    }

    const deletePseudo = (key) => {
        let tmp = [...listPseudo];
        tmp.splice(key, 1);
        setListPseudo(tmp);
    }

    const getRandomIndex = (arrayLength) => {
        return Math.floor(Math.random() * arrayLength);
    }

    const sortGroup = () => {
        let array = [...listPseudo], result = [], count = 1;
        let numberGrps = Math.ceil(listPseudo.length / 5); // Get how much group we need to sort these guys
        setNumberGroups(numberGrps);

        for(let i = 0; i < listPseudo.length; i++){
            let randIndex = getRandomIndex(array.length);

            result = [...result, {name: array[randIndex], group: count}];
            array.splice(randIndex, 1);

            if(count === numberGrps){
                count = 1;
            }
            else{
                count++;
            }
        }
        setGroupsSorted(result);
    }
    return(
        <div className={`content content--${(darkMode) ? "dark" : "light"}`}>
            <div className="sorter container">
                <h1 className={`sorter__title sorter__title--${(darkMode) ? "dark" : "light"}`}>
                    Group Sorter
                </h1>
                <p className={`sorter__subTitle sorter__subTitle--${(darkMode) ? "dark" : "light"}`}>
                    Répartit les joueurs en groupes de maximum 5 personnes
                </p>
                <div className={`sorter__input${inputError}`}>
                    <label className="sorter__input__label" htmlFor="nickname">Pseudo</label>
                    <input type="text" name="nickname" placeholder="Lion" onKeyDown={handleKeyDown} />
                    <p>Veuillez entrer un pseudo correct (sans commencer par un espace)</p>
                </div>

                {(listPseudo.length !== 0 ?
                    <>
                    <div className="sorter__table">{listPseudo.map((pseudo, key) =>
                        <div className={`sorter__table__row sorter__table__row--${(darkMode) ? "dark" : "light"}`} key={key}>
                            <p>{pseudo}</p>
                            <span onClick={() => deletePseudo(key)}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </span>
                            
                        </div>
                      )}
                    </div>
                    <button className="sorter__button" onClick={sortGroup}>Valider</button>
                    </>
                :"")}

                

                <div className={`sorter__group sorter__group--${(darkMode) ? "dark" : "light"}`}>
                    {Array(numberGroups).fill(null).map((el,i) => {
                        return(
                            <div key={i}>
                                <h3 className="sorter__group__title">Groupe {i+1}</h3>
                                <div className="sorter__group__list">
                                    {groupsSorted.map((pseudo, key) => {
                                        if(pseudo.group === i+1){
                                            return <p className="sorter__group__list__pseudo" key={key}>{pseudo.name}</p>
                                        }
                                        else{
                                            return ""
                                        }
                                })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                
            </div>
        </div>
    );
}