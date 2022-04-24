import React from 'react';
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';
import { MySelect } from './UI/select/MySelect';
import { CalculatorFormProps } from '../models/calculator';

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

    return (
        <form>
            <MyInput
                placeholder="Initial loan"
                value={calcInputs.initianLoan}
                onChange={(event) => setCalcInputs({ ...calcInputs, initianLoan: event.target.value })}
                type="number"
            />
            <MyInput
                placeholder="Down payment"
                value={calcInputs.downPayment}
                onChange={(event) => setCalcInputs({ ...calcInputs, downPayment: event.target.value })}
                type="number"
            />
            <MySelect defaultValue="Select bank" value={bankName} onChange={selectedBank} options={banksList!} />
            <div className="btn-container">
                <MyButton
                    onClick={(event) =>
                        calculateMortgagePayment(event, bank, calcInputs.initianLoan, calcInputs.downPayment)
                    }
                    type="submit"
                >
                    Calculate
                </MyButton>
                <MyButton onClick={resetMortgagePayment}>Reset</MyButton>
            </div>
        </form>
    );
};
