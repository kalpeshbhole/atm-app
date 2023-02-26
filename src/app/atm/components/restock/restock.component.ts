import { Component } from '@angular/core';
import { Atm } from '@core/models';
import { AtmService } from '@core/services';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.css']
})
export class RestockComponent {
  constructor(private atmService: AtmService) {
    const atm: Atm = {
      id: 1,
      bankName: "Bank 1",
      currency: {
        $100: 2,
        $50: 3,
        $20: 4,
        $10: 1,
        $5: 6,
        $1: 0
      }
    };

    this.atmService.postRestock(atm).subscribe(atm => {
      console.log(atm);
    });
  }
}
