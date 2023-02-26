import { Component } from '@angular/core';
import { AtmService } from '@core/services';

@Component({
  selector: 'app-atm-details',
  templateUrl: './atm-details.component.html',
  styleUrls: ['./atm-details.component.css']
})
export class AtmDetailsComponent {

  constructor(private atmService: AtmService) {
    this.atmService.getAtm().subscribe(atm => {
      console.log(atm);
    });
  }
}
