import { ChangeEventHandler, FocusEventHandler } from 'react';
import { BankModel } from './bank';

export interface SelectProps {
    options: BankModel[];
    defaultValue: string;
    value: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    onBlur: FocusEventHandler<HTMLSelectElement>;
}
