import {environment} from '@environment';

export const APIs = {
    Account: `${environment.apiUrl}/api/accounts`,
    Transaction: `${environment.apiUrl}/api/transactions`,
    Atm: `${environment.apiUrl}/api/atms`,
    User: `${environment.apiUrl}/api/users`,
}