import { Component, OnInit } from '@angular/core';
import { HistoryComponent } from '../history/history.component';
import { Transaction } from '../../models/transaction/transaction.model';
import { TransactionsService } from '../../services/transactions.service';

@Component({
    selector: 'exchange-limit-order',
    templateUrl: './limit_order.component.html',
    styleUrls: ['./limit_order.component.css']
})
export class LimitOrderComponent implements OnInit {

    constructor(private transactionsService: TransactionsService) {}

    onAddOrder() {
        this.transactionsService.addTransaction('DDD', '11.5.2018', '55', '55 EUR');
    }

}
