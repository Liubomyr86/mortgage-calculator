import React, { useContext, useState } from 'react';
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';
import { MySelect } from './UI/select/MySelect';
import { MyContext } from '../context/MyContext';
import { BankModel } from '../models/bank';

export const CalculatorForm = (): JSX.Element => {
    const [selectedBank, setSelectedBank] = useState('');
    const { banksList } = useContext(MyContext);

    const calculateMortgagePayment = (
        bank: BankModel,
        initialLoanValue: string | number,
        downPayment: string | number,
    ): number => {
        const borrowedMoney = +initialLoanValue - +downPayment;
        const lengthOfLoan = +bank.loanTerm * 12;
        const interestRate = +bank.interestRate;
        const calculedInterest = interestRate / 100;
        const interestReady = calculedInterest / 12;
        // We start the calculations
        const percentage = interestReady;
        const percentagePlusOne = interestReady + 1;
        const exponentiationOperator = percentagePlusOne ** lengthOfLoan;
        const firstDividend = percentage * exponentiationOperator;
        const secondDividend = exponentiationOperator - 1;
        const division = firstDividend / secondDividend;
        const mortgage = borrowedMoney;
        const quotas = mortgage * division;
        return quotas;
    };

    return (
        <form>
            <MyInput placeholder="Initial loan" />
            <MyInput placeholder="Down payment" />
            <MySelect defaultValue="Select bank" value={selectedBank} onChange={setSelectedBank} options={banksList!} />
            <div className="btn-container">
                <MyButton>Calculate</MyButton>
                <MyButton>Reset</MyButton>
            </div>
        </form>
    );
};
