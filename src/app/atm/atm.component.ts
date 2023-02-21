import { Component } from '@angular/core';
import { AccountService, TransactionService } from '@core/services';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {
  constructor(private accountService: AccountService, private transactionService: TransactionService) {
    this.accountService.getAccounts().subscribe(accounts => {
      console.log(accounts);
    });
  }
}
