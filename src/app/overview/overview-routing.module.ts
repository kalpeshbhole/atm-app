import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/guards';
import { TransactionResolver } from '@core/resolvers';
import {
  AtmDetailsComponent, RestockComponent,
  TransactionDetailsComponent, TransactionsComponent
} from './components';
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
      { path: 'details', component: AtmDetailsComponent },
      { path: 'restock', component: RestockComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
