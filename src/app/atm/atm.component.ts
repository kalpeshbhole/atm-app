import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AccountService } from '@core/services';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {

  isActionTaken: boolean = false;

  constructor(private accountService: AccountService, private router: Router) {
    this.accountService.getAccounts().subscribe(accounts => {
      console.log(accounts);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        if (event.url === '/atm') {
          this.isActionTaken = false;
        }
      }
    });

  }

  ngOnInit(): void {
    this.isActionTaken = false;
  }

  actionTaken() {
    this.isActionTaken = true;
  }

}
