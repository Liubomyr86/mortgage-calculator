import { MouseEvent } from 'react';
import { BankModel } from './bank';

export interface CalculatorFormProps {
    calcInputs: {
        initianLoan: string;
        downPayment: string;
    };
    setCalcInputs: (calcInputs: { initianLoan: string; downPayment: string }) => void;
    bankName: string;
    setBankName: (bank: string) => void;
    bank: BankModel;
    setBank: (bank: BankModel) => void;
    banksList: BankModel[] | undefined;
    calculateMortgagePayment: (
        event: MouseEvent,
        bankItem: BankModel,
        initialLoanValue: string | number,
        downPayment: string | number,
    ) => void;
    resetMortgagePayment: () => void;
}
