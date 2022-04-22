import React, { useMemo, useState } from 'react';
import { BankList } from '../compnents/BankList';
import { banksData } from '../mocks/bank-mock';
import { BankForm } from '../compnents/BankForm';
import { BankModel } from '../models/bank';
import { MyContext } from '../context/MyContext';

const Main = (): JSX.Element => {
    const [bankInputs, setBankInputs] = useState<BankModel>({
        bankName: '',
        interestRate: '',
        maxLoan: '',
        minDownPayment: '',
        loanTerm: '',
    });
    const [banksList, setBankList] = useState([...banksData]);
    const [isUpdate, setIsUpdate] = useState(false);

    const createBank = (newBank: BankModel): void => setBankList([...banksList, newBank]);
    const deleteBank = (bank: BankModel): void => setBankList(banksList.filter((item) => item.id !== bank.id));
    const updateBankData = (bank: BankModel): void =>
        setBankList(banksList.map((item) => (item.id === bank.id ? { ...bank } : item)));

    const contextValue = useMemo(() => ({ bankInputs, setBankInputs, deleteBank, setIsUpdate }), []);

    return (
        <MyContext.Provider value={contextValue}>
            <div className="App">
                <BankForm
                    createBank={createBank}
                    setBank={setBankInputs}
                    bank={bankInputs}
                    updateBankData={updateBankData}
                    isUpdate={isUpdate}
                    setIsUpdate={setIsUpdate}
                />
                <hr style={{ margin: '25px auto', width: '667px' }} />
                <BankList banks={banksList} />
            </div>
        </MyContext.Provider>
    );
};

export default Main;
