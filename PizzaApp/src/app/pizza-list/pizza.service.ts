import {IPizza, IReview} from './pizza.model';
import {InjectionToken} from '@angular/core';
import {Observable} from "rxjs";

export interface IPizzaService {
  getPizzas(): Observable<Array<IPizza>>;

  addReview(pizza: IPizza, review: IReview): Observable<IPizza>;
}

export const PIZZA_SERVICE = new InjectionToken<IPizzaService>('PIZZA_SERVICE');
