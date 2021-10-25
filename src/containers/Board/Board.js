import React, { useEffect } from 'react';
// import Card from '../../components/Card/Card';
import classes from './Board.module.css';

const { boardLayout, label } = classes;

const Board = (props) => {

    useEffect(async () => {
         
        const url = 'https://api.trello.com/1/boards/a71QjmC4';
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        // const [item] = data.results; // destructure
    
    
        // fetch('https://api.trello.com/1/boards/a71QjmC4', {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json'
        //     }
        // })
        //     .then(response => {
        //         console.log(
        //             `Response: ${response.status} ${response.statusText}`
        //         );
        //         return response.text();
        //     })
        //     .then(text => console.log(text))
        //     .catch(err => console.error(err));
    
    }, []);
    

    return (
        <div className={boardLayout}>
            <section>
                <h2 className={label}>Backlog</h2>
            </section>
            <section>
                <h2 className={label}>To-do</h2>
            </section>
            <section>
                <h2 className={label}>In Progress</h2>
            </section>
            <section>
                <h2 className={label}>Done</h2>
            </section>
        </div>
    );
};

export default Board;