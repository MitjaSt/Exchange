import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'exchange-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    @Output() activePage = new EventEmitter<string>();
    selectedPage = 'history';

    onSelect(page: string) {
        this.activePage.emit(page);
        this.selectedPage = page;
    }
}
