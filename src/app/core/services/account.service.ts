import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Account } from '@core/models';
import { APIs } from '@core/constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getAccounts() {
    console.log(APIs.Account);
    return this.httpClient.get<Account[]>(APIs.Account);
  }

  getAccountById(id: number) {
    return this.httpClient.get<Account>(`${APIs.Account}/${id}`);
  }

}
