import { BankModel } from './bank';

export interface ContextProps {
    isUpdate?: boolean;
    banksList?: BankModel[];
    bankInputs: BankModel | null;
    setBankInputs?: (bank: BankModel) => void;
    deleteBank?: (bank: BankModel) => void;
    setIsUpdate?: (flag: boolean) => void;
    createBank?: (newBank: BankModel) => void;
    updateBankData?: (bank: BankModel) => void;
}
