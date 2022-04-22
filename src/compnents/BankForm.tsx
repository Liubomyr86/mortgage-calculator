import React, { MouseEvent } from 'react';
import { BankFormProps } from '../models/bank';
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';

export const BankForm = (props: BankFormProps): JSX.Element => {
    const { bank, setBank, createBank, updateBankData, isUpdate, setIsUpdate } = props;

    const addNewBank = (event: MouseEvent): void => {
        event.preventDefault();
        const newBank = { ...bank, id: Date.now() };
        createBank(newBank);
        setBank({ bankName: '', interestRate: '', maxLoan: '', minDownPayment: '', loanTerm: '' });
    };

    const updateBank = (): void => {
        updateBankData(bank);
        setBank({ bankName: '', interestRate: '', maxLoan: '', minDownPayment: '', loanTerm: '' });
        setIsUpdate(false);
    };

    return (
        <form style={{ width: '600px', margin: 'auto' }}>
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
            <MyButton type="submit" onClick={(event) => addNewBank(event)} disabled={isUpdate !== false}>
                Create
            </MyButton>
            <MyButton onClick={updateBank} disabled={isUpdate !== true}>
                Update
            </MyButton>
        </form>
    );
};
