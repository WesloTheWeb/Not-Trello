import React, { useState } from 'react';
import CreateTicketModal from '../../containers/CreateTicketModal/CreateTicketModal';
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