import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user/user.model';

@Component({
    selector: 'exchange-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    // Mock some user data
    users: User[] = [
        new User('demo@demo.demo', 'demo')
    ];

    @Output() activePage = new EventEmitter<string>();

    onLogin() {
        this.activePage.emit('history');
    }
}