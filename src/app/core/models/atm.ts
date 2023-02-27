import { Address } from "./address";
import { Bank } from "./bank";

export interface Atm {
    id: number;
    bank: Bank;
    address: Address,
    currency: {
        $100: number,
        $50: number,
        $20: number,
        $10: number,
        $5: number,
        $1: number
    }
}
