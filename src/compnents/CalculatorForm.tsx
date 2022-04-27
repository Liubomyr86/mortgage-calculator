import React from 'react';
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';
import { MySelect } from './UI/select/MySelect';
import { CalculatorFormProps } from '../models/calculator';
import { useValidation } from '../hooks/useValidation';

export const CalculatorForm = (props: CalculatorFormProps): JSX.Element => {
    const {
        calcInputs,
        setCalcInputs,
        bankName,
        setBankName,
        bank,
        setBank,
        banksList,
        calculateMortgagePayment,
        resetMortgagePayment,
    } = props;

    const selectedBank = (value: string): void => {
        setBankName(value);
        setBank(banksList!.find((item) => item.bankName === value)!);
    };

    const initianLoan = useValidation(calcInputs.initianLoan, { isEmpty: true, maxLoan: false }, bank);
    const downPayment = useValidation(
        calcInputs.downPayment,
        { isEmpty: true, downPayment: false, initianLoan: initianLoan.validationSettings.value },
        bank,
    );
    const select = useValidation(bankName, { isEmpty: true }, bank);

    const setInitiallValidationsValue = (): void => {
        initianLoan.setValidationSettings('', false, true, false, false, false);
        downPayment.setValidationSettings('', false, true, false, false, false, false);
        select.setValidationSettings('', false, true, false, false, false);
    };

    return (
        <form>
            {initianLoan.validationSettings.isDirty && initianLoan.validationSettings.isEmpty && (
                <div className="error">{initianLoan.inputsError.empty}</div>
            )}
            {initianLoan.validationSettings.isDirty && initianLoan.validationSettings.maxLoan && (
                <div className="error">{initianLoan.inputsError.maxLoan}</div>
            )}

            {initianLoan.validationSettings.isDirty && !select.validationSettings.value && (
                <div className="error">Pleas select bank</div>
            )}

            <MyInput
                placeholder="Initial loan"
                value={calcInputs.initianLoan}
                onChange={(event) => {
                    setCalcInputs({ ...calcInputs, initianLoan: event.target.value });
                    initianLoan.onChange(event);
                }}
                type="number"
                onBlur={(event) => initianLoan.onBlur(event)}
            />

            {downPayment.validationSettings.isDirty && downPayment.validationSettings.isEmpty && (
                <div className="error">{downPayment.inputsError.empty}</div>
            )}
            {downPayment.validationSettings.isDirty && downPayment.validationSettings.downPayment && (
                <div className="error">{downPayment.inputsError.downPayment}</div>
            )}
            {initianLoan.validationSettings.isDirty && !select.validationSettings.value && (
                <div className="error">Pleas select bank</div>
            )}

            <MyInput
                placeholder="Down payment"
                value={calcInputs.downPayment}
                onChange={(event) => {
                    setCalcInputs({ ...calcInputs, downPayment: event.target.value });
                    downPayment.onChange(event);
                }}
                type="number"
                onBlur={(event) => downPayment.onBlur(event)}
            />
            <MySelect
                defaultValue="Select bank"
                value={bankName}
                onChange={(event) => {
                    selectedBank(event.target.value);
                    select.onChange(event);
                }}
                options={banksList!}
                onBlur={(event) => select.onBlur(event)}
            />
            <div className="btn-container">
                <MyButton
                    disabled={
                        !initianLoan.validationSettings.inputValid ||
                        !downPayment.validationSettings.inputValid ||
                        !select.validationSettings.inputValid ||
                        downPayment.validationSettings.downPayment ||
                        initianLoan.validationSettings.maxLoan
                    }
                    onClick={(event) =>
                        calculateMortgagePayment(event, bank, calcInputs.initianLoan, calcInputs.downPayment)
                    }
                    type="submit"
                >
                    Calculate
                </MyButton>
                <MyButton
                    onClick={() => {
                        resetMortgagePayment();
                        setInitiallValidationsValue();
                    }}
                >
                    Reset
                </MyButton>
            </div>
        </form>
    );
};
