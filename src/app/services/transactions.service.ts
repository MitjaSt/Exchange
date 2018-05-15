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

    addTransaction(type: string, date: string, quantity: number) {
        this.transactions.unshift(
            new Transaction(
                type,
                date,
                quantity,
                parseFloat((quantity*this.coinValue).toFixed(4))
            )
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
        let date = this.getRandomDate(new Date('1.1.2017'), new Date()) ;

        this.addTransaction(
            type,
            date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds(),
            quantity
        );
    }

    getRandomDate(start, end) {
        // https://gist.github.com/miguelmota/5b67e03845d840c949c4
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

}