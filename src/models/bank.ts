export interface BankModel {
    id?: number;
    bankName: string;
    interestRate: string | number;
    maxLoan: number | string;
    minDownPayment: string | number;
    loanTerm: string | number;
}

export interface BankListProps {
    banks: BankModel[];
}

export interface BankItemsProps {
    bank: BankModel;
}

export interface BankFormProps {
    bank: BankModel;
    setBank: (bank: BankModel) => void;
    createBank: (newBank: BankModel) => void;
    updateBankData: (bank: BankModel) => void;
    isUpdate: boolean;
    setIsUpdate: (flag: boolean) => void;
}
