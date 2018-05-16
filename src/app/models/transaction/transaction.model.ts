export class Transaction {
    public type: string;
    public date: Date;
    public quantity: number;
    public price: number;
    public total: number;

    constructor(type: string, date: Date, quantity: number, price: number) {
        this.type = type;
        this.date = date;
        this.quantity = quantity;
        this.price = price;
        this.total = quantity*price;
    }
}