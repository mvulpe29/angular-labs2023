import {Injectable, InjectionToken, Provider} from '@angular/core';

import {ICustomer} from './customer.model';
import {CUSTOMERS} from './customer.data';
import {Observable, of} from "rxjs";

export interface ICustomerService {
  getCustomers(): Observable<Array<ICustomer>>;

  getCustomer(id: string): Observable<ICustomer | undefined>;
}

@Injectable()
export class CustomerFileService implements ICustomerService {
  getCustomers(): Observable<Array<ICustomer>> {
    return of(CUSTOMERS)
  }

  getCustomer(id: string): Observable<ICustomer | undefined> {
    return of(CUSTOMERS.find(customer => customer._id === id))
  }
}

export const CUSTOMER_SERVICE: InjectionToken<ICustomerService> = new InjectionToken('CUSTOMER_SERVICE');

export const CustomerServiceProvider: Provider = {
  provide: CUSTOMER_SERVICE,
  useClass: CustomerFileService
};
