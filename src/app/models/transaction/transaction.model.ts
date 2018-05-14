export class Transaction {
    public type: string;
    public date: string;
    public quantity: number;
    public value: number;

    constructor(type: string, date: string, quantity: number, value: number) {
        this.type = type;
        this.date = date;
        this.quantity = quantity;
        this.value = value;
    }
}