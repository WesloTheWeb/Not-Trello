import React from 'react';
import Card from '../../components/Card/Card';
import classes from './Board.module.css';

const { layout } = classes;

const Board = (props) => {
    return (
        <section className={layout}>
            <Card title="new" />
            <Card title="new" />
            <Card title="new" />
            <Card title="new" />
        </section>
    );
};


export default Board;