import {Injectable, InjectionToken, Provider} from '@angular/core';
import {ICustomer} from './customer.model';
import {IPizza} from './pizza.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {IOrder} from "./order.model";

export interface IOrderService {
  getPizzas(): Observable<Array<IPizza>>;

  getCustomer(id: string): Observable<ICustomer>;

  saveOrder(order: IOrder);
}

@Injectable()
export class OrderRestService implements IOrderService {

  private pizzaUrl = 'http://localhost:8080/rest/pizzas';
  private customerUrl = 'http://localhost:8080/rest/customers';
  private orderUrl = 'http://localhost:8080/rest/orders';

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
      return this.http.get<ICustomer>(`${this.customerUrl}/${id}`);
    } else {
      return of({
        name: '',
        phone: '',
        email: '',
        address: ''
      });
    }
  }

  saveOrder(order: IOrder) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.orderUrl, order, httpOptions);
  }
}

export const ORDER_SERVICE: InjectionToken<IOrderService> = new InjectionToken('ORDER_SERVICE');

export const OrderServiceProvider: Provider = {
  provide: ORDER_SERVICE,
  useClass: OrderRestService
};
