import {Injectable, InjectionToken, Provider} from '@angular/core';
import {ICustomer} from './customer.model';
import {IPizza} from './pizza.model';
import {HttpClient} from '@angular/common/http';
import {CUSTOMERS} from '../customer/customer.data';
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

export interface IOrderService {
  getPizzas(): Observable<Array<IPizza>>;

  getCustomer(id: string): Observable<ICustomer>;

  saveOrder();
}

@Injectable()
export class OrderRestService {

  private pizzaUrl = 'http://pizza-store.herokuapp.com/api/pizzas';

  constructor(private http: HttpClient) {
  }

  getPizzas(): Observable<Array<IPizza>> {
    return this.http.get<Array<IPizza>>(this.pizzaUrl).pipe(map(pizzas => {
      return pizzas.map(pizza => {
        return {_id: pizza._id, name: pizza.name, price: pizza.price};
      });
    }));
  }

  getCustomer(id: string): Observable<ICustomer> {
    if (id) {
      return Observable.create(observer => {
        observer.next(CUSTOMERS.find(customer => customer._id === id));
        observer.complete();
      });
    } else {
      return of({
        name: '',
        phone: '',
        email: '',
        address: ''
      });
    }
  }
}

export const ORDER_SERVICE: InjectionToken<IOrderService> = new InjectionToken('ORDER_SERVICE');

export const OrderServiceProvider: Provider = {
  provide: ORDER_SERVICE,
  useClass: OrderRestService
};
