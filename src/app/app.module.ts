import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HistoryComponent } from './components/history/history.component';
import { LimitOrderComponent } from './components/limit_order/limit_order.component';

import { TransactionsService } from './services/transactions.service';
import { LoginService } from './services/login.service';

import { CurrencyPipe } from './pipes/currency.pipe';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'limit_order', component: LimitOrderComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HistoryComponent,
    LimitOrderComponent,
    CurrencyPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
      TransactionsService,
      LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }