import React, { MouseEvent, useContext, useState } from 'react';
import { CalculatorForm } from '../compnents/CalculatorForm';
import { MyContext } from '../context/MyContext';
import { BankModel } from '../models/bank';

export const Calculator = (): JSX.Element => {
    const { banksList } = useContext(MyContext);

    const [bankName, setBankName] = useState('');
    const [calcInputs, setCalcInputs] = useState({ initianLoan: '', downPayment: '' });
    const [bank, setBank] = useState<BankModel>({
        bankName: '',
        interestRate: '',
        maxLoan: '',
        minDownPayment: '',
        loanTerm: '',
    });
    const [quotasValue, setQuotasValue] = useState<number | null>(null);

    const calculateMortgagePayment = (
        event: MouseEvent,
        bankItem: BankModel,
        initialLoanValue: string | number,
        downPayment: string | number,
    ): void => {
        event.preventDefault();
        const borrowedMoney = +initialLoanValue - +downPayment;
        const lengthOfLoan = +bankItem.loanTerm * 12;
        const interestRate = +bankItem.interestRate;
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

        setQuotasValue(+quotas.toFixed(2));
    };

    const resetMortgagePayment = (): void => {
        setCalcInputs({ initianLoan: '', downPayment: '' });
        setQuotasValue(null);
        setBankName('');
    };

    return (
        <div className="calculator-container">
            <CalculatorForm
                calcInputs={calcInputs}
                setCalcInputs={setCalcInputs}
                bankName={bankName}
                setBankName={setBankName}
                bank={bank}
                setBank={setBank}
                banksList={banksList}
                calculateMortgagePayment={calculateMortgagePayment}
                resetMortgagePayment={resetMortgagePayment}
            />
            {quotasValue && (
                <p className="calculator-message">Your monthly mortgage payment will be: {quotasValue} $</p>
            )}
        </div>
    );
};
