import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'exchange-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    constructor(private _router:Router) {}

    showHeader() {
        if (this._router.url === '/login'){
            return false;
        }

        return true;
    }

    onLogout() {
        this._router.navigate(['/']);
    }
}
