import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AtmService } from '@core/services';
import { NotificationService } from '@shared/services';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {

  validateForm = this.fb.group({
    cardNumber: ['', Validators.required],
    pin: ['', Validators.required],
  });

  withdrawForm = this.fb.group({
    accountId: ['', Validators.required],
    amount: ['', Validators.required],
  });

  validated: boolean = false;
  
  constructor(private fb: FormBuilder, private router: Router,
    private atmService: AtmService, private notificationService: NotificationService) { }

  validate() {
    if (!this.validateForm.valid) {
      return;
    }

    const cardNumber = parseInt(this.validateForm.get('cardNumber')?.value || "");
    const pin = parseInt(this.validateForm.get('pin')?.value || "");

    this.atmService.getValidate(cardNumber, pin).subscribe((account) => {
      console.log(account);
      this.validated = true;
      this.withdrawForm.get('accountId')?.setValue(account.id.toString());
    },
    (error) => {
      this.notificationService.error("Error", error.error)
      .then(() => {
        this.router.navigate(['atm']);
      });
    });
  }

  withdraw() {
    if (!this.withdrawForm.valid) {
      return;
    }

    const accountId = parseInt(this.withdrawForm.get('accountId')?.value || "");
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

cancelWithdraw(){
  this.router.navigate(['atm']);
}

}
