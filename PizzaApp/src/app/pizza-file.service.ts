import {Injectable} from '@angular/core';
import {PIZZAS} from "./app.data";
import {IPizza} from "./app.model";

@Injectable()
export class PizzaFileService {

  constructor() {
  }

  getPizzas(): Array<IPizza> {
    return PIZZAS;
  }
}
