import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//xcimport { TransactionResolver } from '@core/resolvers';
import { OverviewComponent } from './overview.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  // {
  //   path: ':id',
  //   component: TransactionDetailComponent,
  //   resolve: { transaction: TransactionResolver }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
