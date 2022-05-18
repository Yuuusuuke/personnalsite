import React, { useEffect } from "react";
import "./Thes.scss";
import { useDispatch, useSelector } from "react-redux";
import { getTeasData } from "../../redux/teas";
import Card from "../../components/Card/Card";

export default function Thes(){
    const darkMode = useSelector(state => state.darkMode).active;
    const teasList = useSelector(state => state.teas).list;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeasData());
    }, [dispatch])

    console.log(teasList);
    console.log(teasList.length);

    const addBlank = (number) => {
        let result = [];
        for(let i = 0; i<number; i++){
            result.push(<div key={`blank ${i}`} className='card__blank'></div>);
        }
        console.log(result);
        return <>{result}</>;
    }

    return(
        <div className={`thesBackground thesBackground--${(darkMode) ? "dark" : "light"}`}>
            <div className="thesContainer container">
                <section className="thesContainer__header">
                    <h1 className="thesContainer__header__title">Liste des thés</h1>
                    <p className="thesContainer__header__subTitle">
                        Cette liste comprends uniquement les thés qui ont été les plus appréciés et ne comprends pas forcément tous les types de thés
                    </p>
                </section>
                <div className="thesContainer__table">
                    {teasList.length !== undefined &&
                        teasList.map((tea, key) => {
                            return <Card key={key} image={tea.image} link={tea.link} title={tea.name} sideTitle={tea.price} tags={tea.tags} />
                        })
                    }
                    {teasList.length !== undefined && addBlank(4-(teasList.length%4))}
                </div>
            </div>
        </div>
    );
}