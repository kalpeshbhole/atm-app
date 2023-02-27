export interface Restock {
    id?: number;
    currency: {
        $100: number,
        $50: number,
        $20: number,
        $10: number,
        $5: number,
        $1: number
    }
}