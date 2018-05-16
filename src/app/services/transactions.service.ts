import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction/transaction.model';

@Injectable()
export class TransactionsService {
    transactions: Transaction[] = [];

    constructor() {
        // Add some dummy history for transaction data
        this.loadMockData();
    }

    // Get all transactions
    getAll() {
        return this.transactions;
    }

    // Add new transaction
    addTransaction(type: string, date: Date, quantity: number, price: number) {
        this.transactions.unshift(
            new Transaction(
                type,
                date,
                quantity,
                price
            )
        );
    }


    // Load several mock data
    loadMockData() {
        for(let no = 1 ; no <= 10 ; no++) {
            this.addMockTransaction();
        }
    }

    // Mock transaction data
    addMockTransaction() {
        let type;

        if(Math.round(Math.random()) == 0) {
            type = 'buy';
        } else {
            type = 'sell';
        }

        let quantity = Math.round(Math.random() * 200) + 10;
        let price    = Math.round(Math.random() * 200) + 10;

        let dates =  [
            1496229431249,
            1513940697901,
            1483813025438,
            1497814050369,
            1510184605533,
            1501697460867,
            1520472258180,
            1483473139047,
            1505384518020,
            1524230779625,
            1501138735215,
        ];

        this.addTransaction(
            type,
            new Date(dates[Math.floor(Math.random() * dates.length)]),
            quantity,
            price
        );
    }

}