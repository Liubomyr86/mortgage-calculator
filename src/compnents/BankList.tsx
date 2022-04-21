import React from 'react';
import { BankModel } from '../models/bank';
import { BankItem } from './BankItem';

export const BankList = (props: { banks: BankModel[] }): JSX.Element => {
    const { banks } = props;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Bank name</th>
                        <th>Interest rate, %</th>
                        <th>Maximum loan, $</th>
                        <th>Minimum down payment, %</th>
                        <th>
                            Loan term, <span style={{ textTransform: 'capitalize' }}>Yr</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {banks.map((bank) => (
                        <BankItem {...bank} key={bank.bankName} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
