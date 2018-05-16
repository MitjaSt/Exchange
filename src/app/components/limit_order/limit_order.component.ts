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
    totalValue: number;

    constructor(
        private transactionsService: TransactionsService,
        private router:Router
        ) {} 

    ngOnInit() {
        this.orderForm = new FormGroup({
            type: new FormControl('buy'),
            quantity: new FormControl(null, [this.validateNumber.bind(this)]),
            price: new FormControl(null, [this.validateNumber.bind(this)]),
        });

        // On form updates, calculate total value of transaction
        this.orderForm.valueChanges.subscribe(
               (values) => {
                   this.totalValue = values.quantity * values.price;
               }
        );
    }

    // Add several validation methods for quantity/value inputs
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
        // On valid order form submittion, generate new transaction and route to history
        if(this.orderForm.valid) {
            let date = new Date();

            this.transactionsService.addTransaction(
                this.orderForm.get('type').value,
                 new Date(),
                 parseFloat(this.orderForm.get('quantity').value),
                 parseFloat(this.orderForm.get('price').value)
            );

            this.orderForm.reset();

            this.router.navigate(['/history']);
        }
    }

}
