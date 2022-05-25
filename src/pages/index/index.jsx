import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import { TwitchEmbed } from "react-twitch-embed";

export default function Index() {
  document.title = "Yuusuke - Index";

  const darkMode = useSelector((state) => state.darkMode).active;
  return (
    <div className={`content backgroundIndex ${darkMode && "content--dark"}`}>
      <div className="container container--index twitchEmbed">
        <TwitchEmbed
          id="twitch-embed--desktop"
          channel="Yuusuuke"
          theme="dark"
        />
        <TwitchEmbed
          id="twitch-embed--mobile"
          channel="Yuusuuke"
          theme="dark"
          withChat={false}
        />
      </div>
    </div>
  );
}
