import React from "react";
import "./Tag.scss";

export default function Tag(props) {
  return (
    <div className={`tag tag--${props.text.replace(/ /g, "")}`}>
      {props.text}
    </div>
  );
}
