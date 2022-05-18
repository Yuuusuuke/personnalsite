import React from "react";
import "./Card.scss"
import PropTypes from 'prop-types';

/**
 * Card component
 * Used to display item for a shoppin website
 * 
 * @date 2022-05-18
 * @param {string} props.image
 * @param {string} props.link
 * @param {string} props.title
 * @param {string} props.sideTitle
 * @param {array} props.tags
 * 
 */
export default function Card(props){
    return(
        <article className="card">
            <a href={props.link}>
                <img src={props.image} className="card__image" alt={props.title} />
            </a>
            <div className="card__description">
                <h3 className="card__description__title">{props.title}</h3>
                <p className="card__description__sidetitle">{props.sideTitle}</p>
            </div>
        </article>
    );
}

Card.prototype = {
    image: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    sideTitle: PropTypes.string,
    tags: PropTypes.array,
}