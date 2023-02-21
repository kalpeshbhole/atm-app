import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIs } from '@core/constants';
import { Account, Atm } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class AtmService {

  constructor(private httpClient: HttpClient) { }

  postRefill(atm: Atm){
    return this.httpClient.post<Atm>(`${APIs.Atm}/refill`, atm);
  }

  postWithdraw(accountId: number, amount: number){
    return this.httpClient.post<Atm>(`${APIs.Atm}/withdraw?accountId=${accountId}&amount=${amount}`, {});
  }

  getValidate(cardNumber: number, pin: number){
    return this.httpClient.get<Account>(`${APIs.Atm}/validate?cardNumber=${cardNumber}&pin=${pin}`);
  }
}
