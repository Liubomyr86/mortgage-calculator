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
    delete: (bank: BankModel) => void;
}

export interface BankItemsProps {
    bank: BankModel;
    remove: (bank: BankModel) => void;
}
