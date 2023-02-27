import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '@core/services';
import { NotificationService } from '@shared/services';
import { AtmModuleService } from '../../services';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent {

  balance: number = 0;

  constructor(private router: Router, private accountService: AccountService,
    private notificationService: NotificationService, private atmModuleService: AtmModuleService) {
    this.accountService.getBalanceByAccountId(this.atmModuleService.getAccountId()).subscribe((balance) => {
      console.log(balance);
      this.balance = balance;
    },
      (error) => {
        this.notificationService.error("Error", error.error)
          .then(() => {
            this.router.navigate(['atm']);
          });
      });
  }

  backToAtm() {
    this.router.navigate(['atm']);
  }
}
