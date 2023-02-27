import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmRoutingModule } from './atm-routing.module';
import { AtmComponent } from './atm.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { SharedModule } from '@shared/shared.module';
import { RestockComponent } from './components/restock/restock.component';
import { ChangePinComponent } from './components/change-pin/change-pin.component';
import { CheckBalanceComponent } from './components/check-balance/check-balance.component';
import { LastTransactionComponent } from './components/last-transaction/last-transaction.component';
import { ValidatePinComponent } from './components/validate-pin/validate-pin.component';


@NgModule({
  declarations: [
    AtmComponent,
    WithdrawComponent,
    RestockComponent,
    ChangePinComponent,
    CheckBalanceComponent,
    LastTransactionComponent,
    ValidatePinComponent
  ],
  imports: [
    CommonModule,
    AtmRoutingModule,
    SharedModule
  ]
})
export class AtmModule { }
