import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Transaction } from '../../models/transaction/transaction.model';
import { TransactionsService } from '../../services/transactions.service';

@Component({
    selector: 'exchange-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
    transactions: Transaction[] = [];

    constructor(private transactionsService: TransactionsService) {}

    ngOnInit() {
        // Load some test data
        if(this.transactionsService.getAll().length === 0) {
            this.transactionsService.loadMockData();
        }

        this.transactions = this.transactionsService.getAll();
    }


}
