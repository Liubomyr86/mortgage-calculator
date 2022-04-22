import React from 'react';
import { SelectProps } from '../../../models/select';

export const MySelect: React.FC<SelectProps> = ({ options, defaultValue, value, onChange }): JSX.Element => {
    return (
        <select value={value} onChange={(event) => onChange(event.target.value)}>
            <option disabled value="">
                {defaultValue}
            </option>
            {options.map((option) => (
                <option key={option.id} value={option.bankName}>
                    {option.bankName}
                </option>
            ))}
        </select>
    );
};
