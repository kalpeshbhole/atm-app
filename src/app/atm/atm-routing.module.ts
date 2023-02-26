import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmComponent } from './atm.component';
import { RestockComponent } from './components/restock/restock.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';

const routes: Routes = [
  {
    path: '', component: AtmComponent, 
    children: [
      { path: 'restock', component: RestockComponent },
      { path: 'withdraw', component: WithdrawComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmRoutingModule { }
