import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HistoryComponent } from './components/history/history.component';
import { LimitOrderComponent } from './components/limit_order/limit_order.component';

import { TransactionsService } from './services/transactions.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HistoryComponent,
    LimitOrderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      TransactionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }