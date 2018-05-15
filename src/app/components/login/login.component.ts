import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user/user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'exchange-login',
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.css'
    ],
})
export class LoginComponent {
    // Mock some user data
    users: User[] = [
        new User('demo@demo.demo', 'demo')
    ];

    constructor(private _router: Router) {}
    
    onLogin() {
        this._router.navigate(['/history']);
    }
}