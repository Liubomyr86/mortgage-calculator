import React, { useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyNavigation } from './compnents/UI/navigation/MyNavigation';
import { MyContext } from './context/MyContext';
import { banksData } from './mocks/bank-mock';
import { BankModel } from './models/bank';
import { Calculator } from './pages/Calculator';
import Main from './pages/Main';
import './styles/App.css';

const App = (): JSX.Element => {
    const [banksList, setBankList] = useState([...banksData]);

    const [bankInputs, setBankInputs] = useState<BankModel>({
        bankName: '',
        interestRate: '',
        maxLoan: '',
        minDownPayment: '',
        loanTerm: '',
    });
    const [isUpdate, setIsUpdate] = useState(false);
    const createBank = (newBank: BankModel): void => setBankList([...banksList, newBank]);
    const deleteBank = (bank: BankModel): void => setBankList(banksList.filter((item) => item.id !== bank.id));
    const updateBankData = (bank: BankModel): void =>
        setBankList(banksList.map((item) => (item.id === bank.id ? { ...bank } : item)));

    const contextValue = useMemo(
        () => ({ isUpdate, banksList, bankInputs, setBankInputs, deleteBank, setIsUpdate, createBank, updateBankData }),
        [banksList, bankInputs, isUpdate],
    );

    return (
        <MyContext.Provider value={contextValue}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="logo">
                    <img src="mortgage-calculator/mortgage-calculator-logo.png" alt="mortgage calculator" />
                </div>

                <MyNavigation />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/calculator" element={<Calculator />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </MyContext.Provider>
    );
};

export default App;
