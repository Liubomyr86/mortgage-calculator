import React, { useState } from 'react';
import { BankList } from './compnents/BankList';
import './styles/App.css';
import { banksData } from './mocks/bank-mock';
import { BankForm } from './compnents/BankForm';
import { BankModel } from './models/bank';

const App = (): JSX.Element => {
    const [banksList, setBankList] = useState([...banksData]);
    const createBank = (newBank: BankModel): void => setBankList([...banksList, newBank]);
    const deleteBank = (bank: BankModel): void => setBankList(banksList.filter((item) => item.id !== bank.id));

    return (
        <div className="App">
            <div className="logo">
                <img src="mortgage-calculator-logo.png" alt="mortgage calculator" />
            </div>
            <BankForm create={createBank} />
            <hr style={{ margin: '25px auto', width: '667px' }} />
            <BankList banks={banksList} delete={deleteBank} />
        </div>
    );
};

export default App;
