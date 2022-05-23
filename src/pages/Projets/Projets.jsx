import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsData } from "../../redux/projects";
import "./Projets.scss";
import Card from "../../components/Card/Card";

export default function Projets() {
  const darkMode = useSelector((state) => state.darkMode).active;
  const projectsList = useSelector((state) => state.projects).list;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsData());
  }, [dispatch]);

  const addBlank = (number) => {
    let result = [];
    for (let i = 0; i < number; i++) {
      result.push(<div key={`blank ${i}`} className="card__blank"></div>);
    }
    return <>{result}</>;
  };

  return (
    <div
      className={`projectBackground projectBackground--${
        darkMode ? "dark" : "light"
      }`}
    >
      <div className="projectContainer container">
        <section className="projectContainer__header">
          <h1>Vincent Allio</h1>
          <p>
            <cite>
              « Personne ne sait ce que l'avenir nous réserve. C'est pourquoi
              son potentiel est infini. »
            </cite>
            <br />- Okabe Rintaro, <i>Steins;Gate</i>
          </p>
        </section>
        <section className="projectContainer__description">
          <p>
            Développeur tout d'abord en Basic dans le cadre de mini projets au
            lycée Charles A. Coulomb d'Angoulême, j'obtiens un DUT Informatique
            à l'IUT de Bordeaux me permettant d'acquérir multiples
            connaissances, comprenant plusieurs langages (C++, Java, Javascript,
            C#, SQL, UML, J2EE), un outil de versionning (Git) ainsi qu'une
            méthodologie de travail (Méthodes agiles).
            <br />
            Je me spécialise ensuite vers le développement web, et plus
            particulièrement le front-end avec React grâce à la formation
            d'Openclassroom. J'ajoute ainsi à ma palette de langages React et
            Sass, mais aussi l'utilisation de Bootstrap, Jest, Redux et enfin
            Figma.
            <br />
            Pendant tout mon parcours, je crée divers projets personnels ayant
            pour but d'aller plus loin dans les technologies abordées en
            formation, et de m'intéresser à d'autres. L'objectif est d'ajouter
            d'autres cordes à mon arc, à savoir l'aspect back-end du développeur
            web pour pouvoir être full-stack et donc ainsi avoir une possibilité
            d'actions sur 100% des projets web.
          </p>
        </section>
        <section className="projectContainer__technologies">
          <h2>Liste des technologies utilisées en web</h2>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>Sass</li>
            <li>HTML5 / CSS3</li>
            <li>Jest</li>
            <li>Redux</li>
          </ul>
        </section>
        <section className="projectContainer__projects">
          <h2>Liste des projets</h2>
          <p>
            Voici une liste des projets, aussi bien personnels que
            professionnels, que j'ai pu réaliser ainsi qu'un lien vers les repo
            Git correspondants.
          </p>
          <div className="projectContainer__projects__table">
            {projectsList.length !== undefined &&
              projectsList.map((project, key) => {
                return (
                  <Card
                    key={key}
                    image={project.image}
                    link={project.websiteLink}
                    title={project.name}
                    sideTitle="Lien vers Git"
                    sideTitleLink={project.gitlabLink}
                    tags={project.technologies}
                  />
                );
              })}
            {projectsList.length !== undefined &&
              addBlank(4 - (projectsList.length % 4))}
          </div>
        </section>
      </div>
    </div>
  );
}
