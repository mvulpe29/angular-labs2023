import {Injectable} from '@angular/core';
import {PIZZAS} from "./app.data";
import {IPizza} from "./app.model";

@Injectable({
  providedIn: 'root'
})
export class PizzaFileService {

  constructor() {
  }

  getPizzas(): Array<IPizza> {
    return PIZZAS;
  }
}
