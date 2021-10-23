import React from 'react';
import classes from './BoardButton.module.css';

const { createTicket } = classes;

const BoardButton = ({ name }) => {

    const handleClick = () => {
        console.log('Clicked');
    }

    return (
        <button className={createTicket} onClick={handleClick}>
            {name}
        </button>
    );
};

export default BoardButton;