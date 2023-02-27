import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmRoutingModule } from './atm-routing.module';
import { AtmComponent } from './atm.component';
import { SharedModule } from '@shared/shared.module';
import {
  ChangePinComponent, CheckBalanceComponent,
  LastTransactionComponent, ValidatePinComponent, WithdrawComponent
} from './components';

@NgModule({
  declarations: [
    AtmComponent,
    WithdrawComponent,
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
