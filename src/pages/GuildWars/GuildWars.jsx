import React, { useEffect } from "react";
import "./GuildWars.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAccountData, getRaidData } from "../../redux/gw2";
import BossCard from "../../components/BossCard/BossCard";

export default function GuildWars() {
  const darkMode = useSelector((state) => state.darkMode).active;
  const gw2Data = useSelector((state) => state.guildwars2);
  const dispatch = useDispatch();

  useEffect(() => {
    if (gw2Data.accountName === "") {
      dispatch(getAccountData(gw2Data.token));
    }
    if (gw2Data.raidData === undefined) {
      dispatch(getRaidData(gw2Data.token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`gw2Background gw2Background--${darkMode ? "dark" : "light"}`}
    >
      <div className="gw2Container container">
        <section className="gw2Container__header">
          <h1 className="gw2Container__header__title">Boss Checker</h1>
          <p className="gw2Container__header__subTitle">
            Entrez votre clé API pour avoir les boss de raid que vous avez faits
            cette semaine.
          </p>
        </section>
        <section className="gw2Container__table">
          {gw2Data.bossList.map((boss, key) => {
            return <BossCard key={key} boss={boss.id} />;
          })}
        </section>
      </div>
    </div>
  );
}
