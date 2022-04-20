import React from 'react';
import { ButtonProps } from '../../../models/button';
import classes from './MyButton.module.css';

export const MyButton: React.FC<ButtonProps> = ({ children, onClick, type, disabled }): JSX.Element => {
    return (
        <button onClick={onClick} type={type ? 'submit' : 'button'} disabled={disabled} className={classes.myBtn}>
            {children}
        </button>
    );
};
