import { ChangeEvent, FocusEvent } from 'react';
import { BankModel } from './bank';

export interface ValidationsProps {
    [key: string]: string | number | boolean;
}

export interface ValidationSettings {
    value: string | number;
    isDirty: boolean;
    isEmpty: boolean;
    minLengthError: boolean;
    inputValid: boolean;
    maxLoan: boolean;
    downPayment: boolean | undefined;
}

export interface UseValidationReturn {
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onBlur: (event: FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
    inputsError: { [key: string]: string };
    validationSettings: ValidationSettings;
    setValidationSettings: (
        valueParam: string | number,
        isDirty: boolean,
        isEmpty: boolean,
        minLengthError: boolean,
        inputValidParam: boolean,
        maxLoanParam: boolean,
        downPaymentParam?: boolean | undefined,
    ) => void;
}
