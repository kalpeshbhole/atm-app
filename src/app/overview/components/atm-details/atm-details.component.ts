import { Component } from '@angular/core';
import { Atm } from '@core/models';
import { AtmService } from '@core/services';

@Component({
  selector: 'app-atm-details',
  templateUrl: './atm-details.component.html',
  styleUrls: ['./atm-details.component.css']
})
export class AtmDetailsComponent {
  atm: Atm | undefined;

  constructor(private atmService: AtmService) {
    this.atmService.getAtm().subscribe(atm => {
      console.log(atm);
      this.atm = atm;
    });
  }
}
