import React, { MouseEvent, useState } from 'react';
import { BankModel } from '../models/bank';
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';

export const BankForm = ({ create }: { create: (newBank: BankModel) => void }): JSX.Element => {
    const [bank, setBank] = useState<BankModel>({
        bankName: '',
        interestRate: '',
        maxLoan: '',
        minDownPayment: '',
        loanTerm: '',
    });

    const addNewBank = (event: MouseEvent): void => {
        event.preventDefault();
        const newBank = { ...bank, id: Date.now() };
        create(newBank);
        setBank({ bankName: '', interestRate: '', maxLoan: '', minDownPayment: '', loanTerm: '' });
    };

    return (
        <form style={{ width: '600px' }}>
            <MyInput
                placeholder="Bank name"
                value={bank.bankName}
                onChange={(event) => setBank({ ...bank, bankName: event.target.value })}
            />
            <MyInput
                placeholder="Interest rate"
                value={bank.interestRate}
                onChange={(event) => setBank({ ...bank, interestRate: event.target.value })}
            />
            <MyInput
                placeholder="Maximum loan"
                value={bank.maxLoan}
                onChange={(event) => setBank({ ...bank, maxLoan: event.target.value })}
            />
            <MyInput
                placeholder="Minimum down payment"
                value={bank.minDownPayment}
                onChange={(event) => setBank({ ...bank, minDownPayment: event.target.value })}
            />
            <MyInput
                placeholder=" Loan term"
                value={bank.loanTerm}
                onChange={(event) => setBank({ ...bank, loanTerm: event.target.value })}
            />
            <MyButton onClick={(event) => addNewBank(event)}>Create</MyButton>
        </form>
    );
};
