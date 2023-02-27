import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '@core/services';
import { NotificationService } from '@shared/services';
import { AtmModuleService } from '../../services';

@Component({
  selector: 'app-change-pin',
  templateUrl: './change-pin.component.html',
  styleUrls: ['./change-pin.component.css']
})
export class ChangePinComponent {

  changePinForm = this.fb.group({
    accountId: [this.atmModuleService.getAccountId(), Validators.required],
    pin: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router, private atmModuleService: AtmModuleService,
    private accountService: AccountService, private notificationService: NotificationService) { }

  changePin() {
    if (!this.changePinForm.valid) {
      return;
    }

    const accountId = this.changePinForm.get('accountId')?.value || 0;
    const pin = parseInt(this.changePinForm.get('pin')?.value || "");

    this.accountService.updatePin(accountId, pin).subscribe((response) => {
      console.log(response);
      this.notificationService.success("Success", "Pin updated successfully.")
        .then(() => {
          this.atmModuleService.validateAccount = undefined;
          this.router.navigate(['atm/validate-pin']);
        });
    },
      (error) => {
        this.notificationService.error("Error", error.error)
          .then(() => {
            this.router.navigate(['atm']);
          });
      });
  }

  cancelChangePin() {
    this.router.navigate(['atm']);
  }
}
