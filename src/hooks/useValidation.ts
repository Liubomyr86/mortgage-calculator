import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { BankModel } from '../models/bank';
import { UseValidationReturn, ValidationsProps } from '../models/validations';

export const useValidation = (
    initiallValue: string | number,
    validations: ValidationsProps,
    bankValue?: BankModel | null,
): UseValidationReturn => {
    const [value, setValue] = useState(initiallValue);
    const [isDirty, setDirty] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLoan, setMaxLoan] = useState(false);
    const [inputValid, setInputValid] = useState(false);
    const [downPayment, setDownPayment] = useState<boolean | undefined>(false);
    const [inputsError, setInputsError] = useState({
        empty: `This field cannot be empty.`,
        length: `Must be at least 3 characters`,
        downPayment: '',
        maxLoan: '',
    });

    const setValidationSettings = (
        valueParam: string | number,
        dirty: boolean,
        empty: boolean,
        lengthError: boolean,
        inputValidParam: boolean,
        maxLoanParam: boolean,
        downPaymentParam: boolean | undefined,
    ): void => {
        setValue(valueParam);
        setDirty(dirty);
        setIsEmpty(empty);
        setMinLengthError(lengthError);
        setInputValid(inputValidParam);
        setMaxLoan(maxLoanParam);
        setDownPayment(downPaymentParam);
    };

    const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        setValue(event.target.value);
    };

    const onBlur = (event: FocusEvent<HTMLInputElement | HTMLSelectElement>): void => {
        setDirty(true);
    };

    useEffect(() => {
        Object.keys(validations).forEach((validation) => {
            const element = validations[validation];

            switch (validation) {
                case 'minLength':
                    if (String(value).length < element) {
                        setMinLengthError(true);
                    } else {
                        setMinLengthError(false);
                    }
                    break;
                case 'isEmpty':
                    value && setIsEmpty(false);
                    break;
                case 'downPayment':
                    if (bankValue) {
                        console.log(value > validations.initianLoan);
                        console.log(value, validations.initianLoan);

                        const downPaymentValue = +validations.initianLoan * (+bankValue.minDownPayment / 100);
                        if (+value < +downPaymentValue || +value > +validations.initianLoan) {
                            setDownPayment(true);
                            setInputsError({
                                ...inputsError,
                                downPayment: `Minimum payment cannot be less than ${downPaymentValue}$
                                and more or equal to ${validations.initianLoan}$`,
                            });
                        } else {
                            setDownPayment(false);
                        }
                    }
                    break;
                case 'maxLoan':
                    if (bankValue) {
                        if (+value > +bankValue.maxLoan) {
                            setMaxLoan(true);
                            setInputsError({
                                ...inputsError,
                                maxLoan: `Initial loan cannot be more then ${bankValue.maxLoan}$`,
                            });
                        } else {
                            setMaxLoan(false);
                        }
                    }
                    break;
                default:
                    break;
            }
        });
    }, [value, bankValue, validations.initianLoan]);

    useEffect(() => {
        if (isEmpty || minLengthError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minLengthError]);

    return {
        onChange,
        onBlur,
        inputsError,
        validationSettings: { value, isDirty, isEmpty, minLengthError, inputValid, maxLoan, downPayment },
        setValidationSettings,
    };
};
