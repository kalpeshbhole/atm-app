import { TransactionErrorType, TransactionStatus, TransactionType } from "../enums";

export interface Transaction {
    id: number;
    type: TransactionType;
    amount: number;
    status: TransactionStatus;
    //error: TransactionErrorType;
    accountId: number;
    createDate: Date;
}
