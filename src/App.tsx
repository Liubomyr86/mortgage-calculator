import React, { useState } from 'react';
import { BankList } from './compnents/BankList';
import './styles/App.css';
import { banksData } from './mocks/bank-mock';

const App = (): JSX.Element => {
    const [banksList, setBankList] = useState([...banksData]);

    return (
        <div className="App">
            <div className="logo">
                <img src="mortgage-calculator-logo.png" alt="mortgage calculator" />
            </div>
            <BankList banks={banksList} />
        </div>
    );
};

export default App;
