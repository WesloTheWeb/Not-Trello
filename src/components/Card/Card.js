import React from 'react';
import CardControls from '../CardControls/CardControls';
import classes from './Card.module.css';

const { cardContainer, cardTitleFlex } = classes;

const Card = ({ title, description }) => {
    return (
        <div className={cardContainer}>
            <div className={cardTitleFlex}>
            <h2>{title}</h2>
                <CardControls />
            </div>
            <p>
               {description.slice(0, 100) + '...'}
            </p>
        </div>
    );
};

export default Card;