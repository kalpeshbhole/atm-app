import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Atm, Restock } from '@core/models';
import { AtmService } from '@core/services';
import { NotificationService } from '@shared/services';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.css']
})
export class RestockComponent {

  atm: Atm | undefined;

  restockForm = this.fb.nonNullable.group({
    id: this.fb.nonNullable.control(0, [Validators.required, Validators.min(1)]),
    currency: this.fb.nonNullable.group({
      '$1': this.fb.nonNullable.control(0, [Validators.required, Validators.min(1), Validators.max(100)]),
      '$5': this.fb.nonNullable.control(0, [Validators.required, Validators.min(1), Validators.max(100)]),
      '$10': this.fb.nonNullable.control(0, [Validators.required, Validators.min(1), Validators.max(100)]),
      '$20': this.fb.nonNullable.control(0, [Validators.required, Validators.min(1), Validators.max(100)]),
      '$50': this.fb.nonNullable.control(0, [Validators.required, Validators.min(1), Validators.max(100)]),
      '$100': this.fb.nonNullable.control(0, [Validators.required, Validators.min(1), Validators.max(100)])
    }),
  });

  constructor(private fb: FormBuilder, private atmService: AtmService, private notificationService: NotificationService) {
    this.atmService.getAtm().subscribe(atm => {
      console.log(atm);
      this.atm = atm;
      this.restockForm.get('id')?.setValue(this.atm?.id);
    });
  }

  restock() {
    if (!this.restockForm.valid) {
      return;
    }

    let restock: Restock = {
      id: this.restockForm.value.id,
      currency: {
        $1: this.restockForm.value.currency?.$1 || 0,
        $5: this.restockForm.value.currency?.$5 || 0,
        $10: this.restockForm.value.currency?.$10 || 0,
        $20: this.restockForm.value.currency?.$20 || 0,
        $50: this.restockForm.value.currency?.$50 || 0,
        $100: this.restockForm.value.currency?.$100 || 0,
      }
    };

    this.atmService.postRestock(restock).subscribe((response) => {
      console.log(response);
      this.notificationService.success("Success", "ATM is stocked with new bills.")
        .then(() => {
          this.restockForm.reset();
        });
    },
      (error) => {
        this.notificationService.error("Error", error.error)
          .then(() => {
            this.restockForm.reset();
          });
      });
  }



}
