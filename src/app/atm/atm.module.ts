import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmRoutingModule } from './atm-routing.module';
import { AtmComponent } from './atm.component';
import { RefillComponent } from './components/refill/refill.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    AtmComponent,
    RefillComponent,
    WithdrawComponent
  ],
  imports: [
    CommonModule,
    AtmRoutingModule,
    SharedModule
  ]
})
export class AtmModule { }
