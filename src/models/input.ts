import { ChangeEventHandler } from 'react';

export interface InputProps {
    id?: string;
    value?: string;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
