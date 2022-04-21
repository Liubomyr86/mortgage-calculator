import React, { useState } from 'react';
import { BankItemsProps } from '../models/bank';
import { MyButton } from './UI/button/MyButton';

export const BankItem = (props: BankItemsProps): JSX.Element => {
    const { bank, remove } = props;
    const { bankName, interestRate, maxLoan, minDownPayment, loanTerm } = bank;
    const [isClass, setIsClass] = useState(false);
    return (
        <>
            <tr className="bank-item" onClick={() => setIsClass(!isClass)}>
                <td className="text-title">
                    <strong>{bankName}</strong>
                </td>
                <td className="text-offset">{(+interestRate).toFixed(2)}</td>
                <td className="text-offset">{(+maxLoan).toFixed(2)}</td>
                <td className="text-offset">{(+minDownPayment).toFixed(2)}</td>
                <td className="text-offset">{+loanTerm}</td>
            </tr>
            <tr className={`${isClass ? '' : 'hide-btn'}`}>
                <td colSpan={5}>
                    <div className="btn-container">
                        <MyButton>Edit</MyButton>
                        <MyButton onClick={() => remove(bank)}>Remove</MyButton>
                    </div>
                </td>
            </tr>
        </>
    );
};
