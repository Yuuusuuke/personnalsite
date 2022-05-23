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
          {Array(7)
            .fill(null)
            .map((el, i) => {
              return (
                <div key={i} className="gw2Container__table__wing">
                  <h3>Wing {i + 1}</h3>
                  <div className="gw2Container__table__wing__bosses">
                    {gw2Data.bossList
                      .filter((e) => e.wing === (i + 1).toString())
                      .map((boss, key) => {
                        console.log(boss, i + 1);
                        return (
                          <BossCard key={key} boss={boss.id} check={false} />
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </section>
      </div>
    </div>
  );
}
