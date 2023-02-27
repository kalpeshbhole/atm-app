import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AtmService } from '@core/services';
import { NotificationService } from '@shared/services';
import { AtmModuleService } from '../../services';

@Component({
  selector: 'app-validate-pin',
  templateUrl: './validate-pin.component.html',
  styleUrls: ['./validate-pin.component.css']
})
export class ValidatePinComponent {

  validatePinForm = this.fb.group({
    cardNumber: ['', Validators.required],
    pin: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router,
    private atmService: AtmService, private atmModuleService: AtmModuleService, private notificationService: NotificationService) { }

  validatePin() {
    if (!this.validatePinForm.valid) {
      return;
    }

    const cardNumber = parseInt(this.validatePinForm.get('cardNumber')?.value || "");
    const pin = parseInt(this.validatePinForm.get('pin')?.value || "");

    this.atmService.getValidate(cardNumber, pin).subscribe((account) => {
      console.log(account);
      this.atmModuleService.validateAccount = account;
      this.router.navigate(['atm']);
    },
      (error) => {
        this.notificationService.error("Error", error.error)
          .then(() => {
            this.router.navigate(['atm']);
          });
      });
  }

  cancelValidatePin() {
    this.router.navigate(['atm']);
  }
}
