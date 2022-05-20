import React from "react";
import "./index.scss";
import {TwitchEmbed} from 'react-twitch-embed';
import background from "../../ressources/indexBackground.jpg";

export default function Index(){
    document.title = "Yuusuke - Index";
    return(
        <div className="content backgroundIndex">
            <img src={background} alt="" />
            <div className="container container--index twitchEmbed">
                <TwitchEmbed
                    channel="Yuusuuke"
                    theme="dark"
                />
            </div>
        </div>
    );
}