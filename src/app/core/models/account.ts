import { AccountType } from "../enums";
import { Transaction } from "./transaction";

export interface Account {
    id: number;
    type: AccountType
    name: string;
    balance: number;
    createDate: Date;
    transactions: Transaction[];
}
