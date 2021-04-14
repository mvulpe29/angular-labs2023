import {Injectable, Provider} from '@angular/core';
import {PIZZAS} from "./app.data";
import {IPizza} from "./app.model";
import {IPizzaService, PIZZA_SERVICE} from "./pizza.service";
import {Observable, of} from "rxjs";

@Injectable()
export class PizzaFileService implements IPizzaService {

  constructor() {
  }

  getPizzas(): Observable<Array<IPizza>> {
    return of(PIZZAS);
  }
}


export const PizzaServiceProvider: Provider = {
  provide: PIZZA_SERVICE,
  useClass: PizzaFileService
};
