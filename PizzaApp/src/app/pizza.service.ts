import {Injectable} from '@angular/core';
import {PIZZAS} from "./app.data";
import {IPizza} from "./app.model";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() {
  }

  getPizzas(): Array<IPizza> {
    return PIZZAS;
  }
}
