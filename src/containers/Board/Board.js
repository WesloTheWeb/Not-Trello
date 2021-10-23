import React from 'react';
import Card from '../../components/Card/Card';
import classes from './Board.module.css';

const { boardLayout } = classes;

const Board = (props) => {
    return (
        <section className={boardLayout}>
            <Card title="new" />
        </section>
    );
};

export default Board;