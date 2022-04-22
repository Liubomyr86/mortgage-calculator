import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyNavigation } from './compnents/UI/navigation/MyNavigation';
import { Calculator } from './pages/Calculator';
import Main from './pages/Main';
import './styles/App.css';

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <div className="logo">
                <img src="mortgage-calculator-logo.png" alt="mortgage calculator" />
            </div>

            <MyNavigation />
            <div className="App">
                <Routes>
                    <Route path="/main" element={<Main />} />
                    <Route path="/calculator" element={<Calculator />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
