import {Injectable, Provider} from '@angular/core';
import {PIZZAS} from "./pizza.data";
import {IPizza, IReview} from "./pizza.model";
import {IPizzaService, PIZZA_SERVICE} from "./pizza.service";
import {Observable, of} from "rxjs";

@Injectable()
export class PizzaFileService implements IPizzaService {

  constructor() {
  }

  getPizza(id: string): Observable<IPizza> {
    return of(PIZZAS.find(pizza => pizza._id === id));
  }

  getPizzas(): Observable<Array<IPizza>> {
    return of(PIZZAS);
  }

  addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    pizza.reviews.push(review);
    return of(pizza);
  }
}


export const PizzaServiceProvider: Provider = {
  provide: PIZZA_SERVICE,
  useClass: PizzaFileService
};
