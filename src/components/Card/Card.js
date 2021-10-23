import React from 'react';
import CardControls from '../CardControls/CardControls';
import classes from './Card.module.css';

const { cardContainer, cardTitleFlex } = classes;

const Card = ({ title }) => {
    return (
        <div className={cardContainer}>
            <div className={cardTitleFlex}>
            <h2>{title}</h2>
                <CardControls />
            </div>
            <p>
                Scuttle rigging scurvy cog lee nipper Letter of Marque transom Buccaneer Privateer...
            </p>
        </div>
    );
};

export default Card;