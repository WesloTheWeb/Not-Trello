import React from 'react';
import classes from './BoardButton.module.css';

const { createTicket } = classes;

const BoardButton = ({ name }) => {
    return (
        <button className={createTicket}>
            {name}
        </button>
    );
};

export default BoardButton;