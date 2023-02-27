import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NegateAuthGuard } from '@auth/guards';
import { AtmComponent } from './atm.component';
import {
  ChangePinComponent, CheckBalanceComponent,
  LastTransactionComponent, ValidatePinComponent,
  WithdrawComponent
} from './components';
import { AtmGuard } from './guards';

const routes: Routes = [
  { path: 'validate-pin', component: ValidatePinComponent, canActivate: [ NegateAuthGuard ] },
  {
    path: '', component: AtmComponent,
    canActivate: [AtmGuard],
    children: [
      { path: 'withdraw', component: WithdrawComponent },
      { path: 'check-balance', component: CheckBalanceComponent },
      { path: 'change-pin', component: ChangePinComponent },
      { path: 'last-transaction', component: LastTransactionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmRoutingModule { }
