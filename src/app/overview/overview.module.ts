import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AtmDetailsComponent } from './components/atm-details/atm-details.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    OverviewComponent,
    TransactionsComponent,
    AtmDetailsComponent,
    TransactionDetailsComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    SharedModule
  ]
})
export class OverviewModule { }
