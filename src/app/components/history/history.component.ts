import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction/transaction.model';
import { TransactionsService } from '../../services/transactions.service';

@Component({
    selector: 'exchange-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
    title = 'app';
    transactions: Transaction[] = [];

    constructor(private transactionsService: TransactionsService) {}

    ngOnInit() {
        // Load some test data
        if(this.transactionsService.getState().length === 0) {
            this.transactionsService.loadMockData();
        }
        
        // Set initial history state
        this.transactions = this.transactionsService.getState();
    }

}
