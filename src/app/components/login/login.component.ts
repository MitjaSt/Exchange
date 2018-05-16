import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
    selector: 'exchange-login',
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.css'
    ],
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading: boolean;
    
    constructor(private _router: Router,
                private loginService: LoginService) {}

    ngOnInit() {
        this.loading = false;

        this.loginForm = new FormGroup({
            'email': new FormControl(''),
            'password': new FormControl('')
        });
    }

    onSubmit() {
        // Enable loading status for submit button
        this.loading = true;

        // Call service and authenticate user
        // We pass form data, allthough this is just a mock call, request is actualy GET not POST
        // Login will work even when all inputs are empty
        let result = this.loginService.authenticate(
            this.loginForm.get('email').value,
            this.loginForm.get('password').value
        ).subscribe(
            (data) => {
                if(data['result'] ===  true) {
                    // Add some delay to emulate loading
                    window.setTimeout(() => {
                        // Reset submit button loading status
                        this.loading = false;
                        this._router.navigate(['/history']);
                    }, 2500);    
                }
            },
            (error) => {
                console.error(error);
            }
        );
    }
}