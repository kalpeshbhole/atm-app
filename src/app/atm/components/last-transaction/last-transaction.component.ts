import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-transaction',
  templateUrl: './last-transaction.component.html',
  styleUrls: ['./last-transaction.component.css']
})
export class LastTransactionComponent {

  constructor(private router: Router) {}

  backToAtm() {
    this.router.navigate(['atm']);
  }
}
