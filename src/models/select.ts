import { ChangeEventHandler } from 'react';
import { BankModel } from './bank';

export interface SelectProps {
    options: BankModel[];
    defaultValue: string;
    value: string;
    onChange: (value: string) => void;
    // onChange?: ChangeEventHandler<HTMLSelectElement>;
}
