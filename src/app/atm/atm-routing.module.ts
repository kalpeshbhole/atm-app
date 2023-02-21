import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmComponent } from './atm.component';
import { RefillComponent } from './components/refill/refill.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';

const routes: Routes = [
  {
    path: '', component: AtmComponent, 
    children: [
      { path: 'refill', component: RefillComponent },
      { path: 'withdraw', component: WithdrawComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmRoutingModule { }
