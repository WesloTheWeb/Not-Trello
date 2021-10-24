import React from 'react';
import Card from '../../components/Card/Card';
import classes from './Board.module.css';

const { boardLayout, label } = classes;

const MOCK_BACKLOG = [
    {
        title: 'Set up servers',
        description: 'We will need to make it not client side code. We will want to scale'
    },
    {
        title: 'Add in Dark Mode',
        description: 'Users should be able to implement darkmode.'
    },
];

const MOCK_TODO = [
    {
        title: 'Touchbase with design',
        description: 'We need to finalize our design scheme and pallette. Once decided, add it to our specs in the codebase as variables to be used.'
    },
    {
        title: 'Taco Supply',
        description: 'Refill the taco supply'
    },
    {
        title: 'Engage battle systems',
        description: 'Users should be ready to PvP soon. Add in toggle for PvP and PvP zones.'
    },
];

const MOCK_PROGRESS = [
    {
        title: 'Getting the API key into env variable',
        description: `Before moving on, we'll need to secure our API key.`
    },
]

const Board = (props) => {
    return (
        <div className={boardLayout}>
            <section>
                <h2 className={label}>Backlog</h2>
                {MOCK_BACKLOG.map((backlogItem, idx) => {
                    return (
                        <Card
                            key={idx}
                            title={backlogItem.title}
                            description={backlogItem.description} />
                    )
                })}
            </section>
            <section>
                <h2 className={label}>To-do</h2>
                {MOCK_TODO.map((toDoItem, idx) => {
                    return (
                        <Card
                            key={idx}
                            title={toDoItem.title}
                            description={toDoItem.description} />
                    )
                })}
            </section>
            <section>
                <h2 className={label}>In Progress</h2>
                {MOCK_PROGRESS.map((progressItem, idx) => {
                    return (
                        <Card
                            key={idx}
                            title={progressItem.title}
                            description={progressItem.description} />
                    )
                })}
            </section>
            <section>
                <h2 className={label}>Done</h2>
            </section>
        </div>
    );
};

export default Board;