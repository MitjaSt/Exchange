import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction/transaction.model';

@Injectable()
export class TransactionsService {
    transactions: Transaction[] = [];

    // Value of 1 coin so we can generate total transaction value
    coinValue : number;

    constructor() {
        this.coinValue = (Math.random() * 2000) + 6000;

        this.loadMockData();
    }


    getState() {
        return this.transactions;
    }

    addTransaction(type: string, date: string, quantity: number, value: number) {
        this.transactions.push(
            new Transaction(
                type,
                date,
                quantity,
                parseFloat((quantity*this.coinValue).toFixed(4))
        );
    }


    // Mocking methods
    loadMockData() {
        for(let no = 0 ; no <= 10 ; no++) {
            this.addMockTransaction();
        }
    }

    addMockTransaction() {
        let type;

        if(Math.round(Math.random()) == 0) {
            type = 'Buy';
        } else {
            type = 'Sell';
        }

        let quantity = Math.round(Math.random() * 200) + 10;
        let date = new Date(+(new Date()) - Math.round(Math.random()*10000000000));

        this.addTransaction(
            type,
            date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear()
            quantity
        );
    }
}