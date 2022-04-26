import React, { MouseEvent, useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { useValidation } from '../hooks/useValidation';
import { BankFormProps } from '../models/bank';
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';

export const BankForm = (props: BankFormProps): JSX.Element => {
    const { banksList } = useContext(MyContext);
    const { bank, setBank, createBank, updateBankData, isUpdate, setIsUpdate } = props;

    const bankName = useValidation(bank.bankName, { minLength: 3, isEmpty: true });
    const interestRate = useValidation(bank.interestRate, { isEmpty: true });
    const maxLoan = useValidation(bank.maxLoan, { isEmpty: true });
    const minDownPayment = useValidation(bank.minDownPayment, { isEmpty: true });
    const loanTerm = useValidation(bank.loanTerm, { isEmpty: true });

    const setInitiallValidationsValue = (): void => {
        bankName.setValidationSettings('', false, true, false, false, false);
        interestRate.setValidationSettings('', false, true, false, false, false);
        maxLoan.setValidationSettings('', false, true, false, false, false);
        minDownPayment.setValidationSettings('', false, true, false, false, false);
        loanTerm.setValidationSettings('', false, true, false, false, false);
    };

    const addNewBank = (event: MouseEvent): void => {
        event.preventDefault();
        const newBank = { ...bank, id: Date.now() };
        createBank(newBank);
        setBank({ bankName: '', interestRate: '', maxLoan: '', minDownPayment: '', loanTerm: '' });
        setInitiallValidationsValue();
    };

    const updateBank = (): void => {
        updateBankData(bank);
        setBank({ bankName: '', interestRate: '', maxLoan: '', minDownPayment: '', loanTerm: '' });
        setIsUpdate(false);
        setInitiallValidationsValue();
    };

    return (
        <form>
            {bankName.validationSettings.isDirty && bankName.validationSettings.isEmpty && (
                <div className="error">{bankName.inputsError.empty}</div>
            )}
            {bankName.validationSettings.isDirty && bankName.validationSettings.minLengthError && (
                <div className="error">{bankName.inputsError.length}</div>
            )}
            <MyInput
                placeholder="Bank name"
                value={bank.bankName}
                onChange={(event) => {
                    setBank({ ...bank, bankName: event.target.value });
                    bankName.onChange(event);
                }}
                onBlur={(event) => bankName.onBlur(event)}
            />

            {interestRate.validationSettings.isDirty && interestRate.validationSettings.isEmpty && (
                <div className="error">{interestRate.inputsError.empty}</div>
            )}
            <MyInput
                placeholder="Interest rate"
                value={bank.interestRate}
                onChange={(event) => {
                    setBank({ ...bank, interestRate: event.target.value });
                    interestRate.onChange(event);
                }}
                onBlur={(event) => interestRate.onBlur(event)}
                type="number"
            />

            {maxLoan.validationSettings.isDirty && maxLoan.validationSettings.isEmpty && (
                <div className="error">{maxLoan.inputsError.empty}</div>
            )}
            <MyInput
                placeholder="Maximum loan"
                value={bank.maxLoan}
                onChange={(event) => {
                    setBank({ ...bank, maxLoan: event.target.value });
                    maxLoan.onChange(event);
                }}
                onBlur={(event) => maxLoan.onBlur(event)}
                type="number"
            />

            {minDownPayment.validationSettings.isDirty && minDownPayment.validationSettings.isEmpty && (
                <div className="error">{minDownPayment.inputsError.empty}</div>
            )}
            <MyInput
                placeholder="Minimum down payment"
                value={bank.minDownPayment}
                onChange={(event) => {
                    setBank({ ...bank, minDownPayment: event.target.value });
                    minDownPayment.onChange(event);
                }}
                onBlur={(event) => minDownPayment.onBlur(event)}
                type="number"
            />

            {loanTerm.validationSettings.isDirty && loanTerm.validationSettings.isEmpty && (
                <div className="error">{loanTerm.inputsError.empty}</div>
            )}
            <MyInput
                placeholder=" Loan term"
                value={bank.loanTerm}
                onChange={(event) => {
                    setBank({ ...bank, loanTerm: event.target.value });
                    loanTerm.onChange(event);
                }}
                onBlur={(event) => loanTerm.onBlur(event)}
                type="number"
            />
            <div className="btn-container" style={{ justifyContent: 'start' }}>
                <MyButton
                    type="submit"
                    onClick={(event) => addNewBank(event)}
                    disabled={
                        !bankName.validationSettings.inputValid ||
                        !interestRate.validationSettings.inputValid ||
                        !maxLoan.validationSettings.inputValid ||
                        !minDownPayment.validationSettings.inputValid ||
                        !loanTerm.validationSettings.inputValid
                    }
                >
                    Create
                </MyButton>
                <MyButton onClick={updateBank} disabled={isUpdate !== true}>
                    Update
                </MyButton>
            </div>
        </form>
    );
};
