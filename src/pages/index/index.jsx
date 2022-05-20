import React from "react";
import "./index.scss";
import {TwitchEmbed} from 'react-twitch-embed';
import { useSelector } from "react-redux";

export default function Index(){
    document.title = "Yuusuke - Index";
    const darkMode = useSelector(state => state.darkMode).active;
    return(
        <div className="content">
            <h1>Index</h1>
            <div className="container">
                <TwitchEmbed
                    channel="Yuusuuke"
                    theme="dark"
                    width="100%"
                    heigth="100%"
                />
            </div>
        </div>
    );
}