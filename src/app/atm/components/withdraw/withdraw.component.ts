import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AtmService } from '@core/services';
import { NotificationService } from '@shared/services';
import { AtmModuleService } from '../../services';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {

  withdrawForm = this.fb.group({
    accountId: [this.atmModuleService.getAccountId(), Validators.required],
    amount: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router, private atmModuleService: AtmModuleService,
    private atmService: AtmService, private notificationService: NotificationService) { }

  withdraw() {
    if (!this.withdrawForm.valid) {
      return;
    }

    const accountId = this.withdrawForm.get('accountId')?.value || 0;
    const amount = parseInt(this.withdrawForm.get('amount')?.value || "");

    this.atmService.postWithdraw(accountId, amount).subscribe((response) => {
      console.log(response);
      this.notificationService.success("Success", "Please collect your money.")
        .then(() => {
          this.router.navigate(['atm']);
        });
    },
      (error) => {
        this.notificationService.error("Error", error.error)
          .then(() => {
            this.router.navigate(['atm']);
          });
      });
  }

  cancelWithdraw() {
    this.router.navigate(['atm']);
  }

}
