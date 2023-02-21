import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '@core/models';
import {APIs} from '@core/constants';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }

  getTransactions() {
    return this.httpClient.get<Transaction[]>(APIs.Transaction);
  }

  getTransactionById(id: number) {
    return this.httpClient.get<Transaction>(`${APIs.Transaction}/${id}`);
  }

  postTransaction(transaction: Transaction){
    return this.httpClient.post<Transaction>(APIs.Transaction, transaction);
  }
}
