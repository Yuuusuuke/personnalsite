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
                <TwitchEmbed id="twitch-embed--desktop"
                    channel="Yuusuuke"
                    theme="dark"
                />
                <TwitchEmbed
                    id="twitch-embed--mobile"
                    channel="Yuusuuke"
                    theme="dark"
                    withChat= {false}
                />
            </div>
        </div>
    );
}