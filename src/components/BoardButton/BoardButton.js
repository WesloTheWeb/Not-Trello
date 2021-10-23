import React, { useContext } from 'react';
import { ModalContext } from '../../Contexts/ModalContext';
import classes from './BoardButton.module.css';

const { createTicket } = classes;

const BoardButton = ({ name }) => {

    const {isModal} = useContext(ModalContext);

    const handleClick = () => {
        return isModal(true);
    }

    return (
        <button className={createTicket} onClick={handleClick}>
            {name}
        </button>
    );
};

export default BoardButton;