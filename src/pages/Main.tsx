import React, { useContext } from 'react';
import { BankList } from '../compnents/BankList';
import { BankForm } from '../compnents/BankForm';
import { MyContext } from '../context/MyContext';

const Main = (): JSX.Element => {
    const { isUpdate, banksList, bankInputs, setBankInputs, setIsUpdate, createBank, updateBankData } =
        useContext(MyContext);

    return (
        <>
            <BankForm
                createBank={createBank!}
                setBank={setBankInputs!}
                bank={bankInputs!}
                updateBankData={updateBankData!}
                isUpdate={isUpdate!}
                setIsUpdate={setIsUpdate!}
            />
            <hr style={{ margin: '25px auto', maxWidth: '667px' }} />
            <BankList banks={banksList!} />
        </>
    );
};

export default Main;
