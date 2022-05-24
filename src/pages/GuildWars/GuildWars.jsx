import React, { useEffect, useState } from "react";
import "./GuildWars.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAccountData, getRaidData, setToken } from "../../redux/gw2";
import BossCard from "../../components/BossCard/BossCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function GuildWars() {
  document.title = "Yuusuke - Boss Checker";

  const [APIKey, setAPIKey] = useState(null);
  const [showKey, setShowKey] = useState(false);

  const darkMode = useSelector((state) => state.darkMode).active;
  const gw2Data = useSelector((state) => state.guildwars2);
  const dispatch = useDispatch();

  useEffect(() => {
    if (gw2Data.token !== undefined) {
      if (gw2Data.accountName === "") {
        dispatch(getAccountData(gw2Data.token));
      }
      if (gw2Data.raidData === undefined) {
        dispatch(getRaidData(gw2Data.token));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gw2Data.token]);

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

        <form
          className="gw2Container__inputAPIKey"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(setToken(APIKey));
          }}
        >
          <input
            className="gw2Container__inputAPIKey__textField"
            type={showKey ? "text" : "password"}
            id="APIKey"
            name="APIKey"
            placeholder="Clé API"
            required
            onChange={(e) => setAPIKey(e.target.value)}
          />
          <div
            className="gw2Container__inputAPIKey__showButton"
            onClick={() => setShowKey(!showKey)}
          >
            <FontAwesomeIcon icon={faEye} />
          </div>
          <input className="gw2Container__inputAPIKey__button" type="submit" />
        </form>

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
                        return (
                          <BossCard
                            key={key}
                            boss={boss}
                            check={
                              // Check if bosses are in both arrays
                              gw2Data.raidData !== undefined &&
                              gw2Data.raidData.some((e) => e === boss.id)
                            }
                          />
                        );
                      })}
                  </div>
                </div>
              );
            })}
          <div className="gw2Container__table__wing gw2Container__table__wing--blank"></div>
          <div className="gw2Container__table__wing gw2Container__table__wing--blank"></div>
        </section>
      </div>
    </div>
  );
}
