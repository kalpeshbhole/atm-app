import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionStatus, TransactionType } from '@core/enums';
import { Transaction } from '@core/models';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent {

  public TransactionType = TransactionType;
  public TransactionStatus = TransactionStatus;

  transaction: Transaction | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}
 
  ngOnInit(): void {
  this.activatedRoute.data.subscribe((response: any) => {
    console.log('PRODUCT FETCHING', response);
    this.transaction = response as Transaction;
  });
}
}
