import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Transaction } from '@core/models';
import { TransactionService } from '@core/services';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionResolver implements Resolve<Transaction> {

constructor(private transactionService: TransactionService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Transaction> {
    const id: number = parseInt(route.paramMap.get('id') || '');
    return this.transactionService.getTransactionById(id);
  }
}
