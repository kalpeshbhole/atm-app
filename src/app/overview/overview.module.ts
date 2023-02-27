import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';

import { SharedModule } from '@shared/shared.module';
import { AtmDetailsComponent, RestockComponent, TransactionDetailsComponent, TransactionsComponent } from './components';



@NgModule({
  declarations: [
    OverviewComponent,
    TransactionsComponent,
    AtmDetailsComponent,
    TransactionDetailsComponent,
    RestockComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    SharedModule
  ]
})
export class OverviewModule { }
