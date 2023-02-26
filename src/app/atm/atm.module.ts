import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmRoutingModule } from './atm-routing.module';
import { AtmComponent } from './atm.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { SharedModule } from '@shared/shared.module';
import { RestockComponent } from './components/restock/restock.component';


@NgModule({
  declarations: [
    AtmComponent,
    WithdrawComponent,
    RestockComponent
  ],
  imports: [
    CommonModule,
    AtmRoutingModule,
    SharedModule
  ]
})
export class AtmModule { }
