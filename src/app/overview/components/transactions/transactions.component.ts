import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountType, TransactionStatus, TransactionType } from '@core/enums';
import { Transaction } from '@core/models';
import { TransactionService } from '@core/services';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {

  public TransactionType = TransactionType;
  public TransactionStatus = TransactionStatus;

  displayedColumns: string[] = ['id', 'type', 'amount', 'status', 'accountId', 'createDate'];
  transactions: Transaction[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private transactionService: TransactionService) {
    this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
    });
  }

  showTransactionDetails(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }

}
