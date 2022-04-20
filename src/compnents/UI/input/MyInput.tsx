import React from 'react';
import { InputProps } from '../../../models/input';
import classes from './MyInput.module.css';

export const MyInput: React.FC<InputProps> = ({ id, placeholder, onChange, disabled, value }): JSX.Element => {
    return (
        <input
            value={value}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            className={classes.myInput}
        />
    );
};