import { Injectable } from '@angular/core';
import { Account } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class AtmModuleService {

  validateAccount: Account | undefined;

  constructor() { }

  isValidated() {
    return this.validateAccount?.id ? true : false;
  }

  getAccountId() {
    return this.validateAccount?.id || 0;
  }
}
