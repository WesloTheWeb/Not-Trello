import React from 'react';
import classes from './Header.module.css';

const { title, titleContainer } = classes;

const Header = (props) => {
    return (
        <section className={titleContainer}>
            <h1 className={title}>Not Trello</h1>
            <h2>Looks and functions like it, but we are not Trello.</h2>
            {/* <nav></nav> */}
        </section>
    );
};


export default Header;