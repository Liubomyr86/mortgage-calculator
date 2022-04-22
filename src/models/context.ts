import { BankModel } from './bank';

export interface ContextProps {
    bankInputs: BankModel | null;
    setBankInputs?: (bank: BankModel) => void;
    deleteBank?: (bank: BankModel) => void;
    setIsUpdate?: (flag: boolean) => void;
}
