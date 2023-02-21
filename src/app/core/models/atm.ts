export interface Atm {
    id: number;
    bankName: string;
    currency: {
        $100: number,
        $50: number,
        $20: number,
        $10: number,
        $5: number,
        $1: number
    }
}
