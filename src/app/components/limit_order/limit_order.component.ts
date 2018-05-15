import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { HistoryComponent } from '../history/history.component';

import { TransactionsService } from '../../services/transactions.service';


@Component({
    selector: 'exchange-limit-order',
    templateUrl: './limit_order.component.html',
    styleUrls: ['./limit_order.component.css'],
})
export class LimitOrderComponent implements OnInit {

     orderForm: FormGroup;
     coinValue: number;
     totalValue: number;

    constructor(
        private transactionsService: TransactionsService,
        private _router:Router
        ) {} 


    ngOnInit() {
        this.orderForm = new FormGroup({
            'type': new FormControl('Buy'),
            'quantity': new FormControl(null, [this.validateNumber.bind(this)])
        });

        this.orderForm.valueChanges.subscribe(
               (values) => {
                   this.totalValue = this.coinValue * values.quantity;
               }
        );

        this.coinValue = this.transactionsService.coinValue;

    }

    validateNumber(control: FormControl): {[s: string]: boolean} {

        if(control.value == '') {
            return null;
        }

        let numericValue = parseFloat(control.value);

        if(numericValue != control.value) {
            return {'missingValue': true};
        }

        if(numericValue != control.value) {
            return {'invalid': true};
        }

        if(numericValue == 0) {
            return {'equalZero': true};
        }

        return null;
    }

    onSubmit() {

        if(this.orderForm.valid) {
            let date = new Date();

            this.transactionsService.addTransaction(
                this.orderForm.get('type').value,
                 date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds(),
                 parseFloat(this.orderForm.get('quantity').value)
            );

            this.orderForm.reset();

            this._router.navigate(['/history']);
        }
    }

}
