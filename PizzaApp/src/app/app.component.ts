import {Component} from "@angular/core";
import {IPizza} from "./app.model";
import {PizzaService} from './pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pizzas: Array<IPizza>;

  constructor(private pizzaService: PizzaService) {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
