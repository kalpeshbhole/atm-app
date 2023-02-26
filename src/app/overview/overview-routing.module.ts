import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/guards';
import { TransactionResolver } from '@core/resolvers';
import { AtmDetailsComponent } from './components/atm-details/atm-details.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { OverviewComponent } from './overview.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: OverviewComponent,
    children: [
      {
        path: 'transactions', component: TransactionsComponent,
        children: [
          {
            path: ':id', component: TransactionDetailsComponent, resolve: { transaction: TransactionResolver }
          }
        ]
      },
      { path: 'details', component: AtmDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
