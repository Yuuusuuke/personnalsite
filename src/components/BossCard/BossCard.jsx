import React from "react";
import "./BossCard.scss";
import DONESVG from "../../ressources/svg/done.svg";
import NOTDONESVG from "../../ressources/svg/notdone.svg";

export default function BossCard(props) {
  return (
    <div className={`BossCard BossCard--${props.check ? "green" : "red"}`}>
      <img className="BossCard__background" src={props.boss.image} alt="" />
      <p>{props.boss.name}</p>
      <img
        className="BossCard__SVG"
        src={props.check ? DONESVG : NOTDONESVG}
        alt=""
      />
    </div>
  );
}
