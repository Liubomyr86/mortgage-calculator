import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MyNavigation.module.css';

export const MyNavigation = (): JSX.Element => {
    return (
        <nav className={classes.myNav}>
            <Link to="/main">Main</Link>
            <Link to="/calculator">Calculator</Link>
        </nav>
    );
};
