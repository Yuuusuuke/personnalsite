import React /*, { useEffect }*/ from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DarkModeSwitch.scss";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { /*setMode,*/ switchMode } from "../../redux/darkmode";
import { useDispatch, useSelector } from "react-redux";

export default function DarkModeSwitch() {
  const darkMode = useSelector((state) => state.darkMode).active;
  const dispatch = useDispatch();

  /**
   * ! Fix bug with Twitch embed and localStorage for darkmode
   */

  /*useEffect(() => {
    localStorage.getItem("darkmodeSwitch") !== null
      ? dispatch(setMode(localStorage.getItem("darkmodeSwitch")))
      : localStorage.setItem("darkmodeSwitch", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);*/

  const changeMode = () => {
    //localStorage.setItem("darkmodeSwitch", !darkMode);
    dispatch(switchMode());
  };

  return (
    <div
      className={`buttonDM buttonDM--${darkMode ? "moon" : "sun"}`}
      onClick={() => changeMode()}
    >
      {darkMode ? (
        <FontAwesomeIcon className="buttonDM__icon" icon={faMoon} />
      ) : (
        <FontAwesomeIcon className="buttonDM__icon" icon={faSun} />
      )}
    </div>
  );
}
