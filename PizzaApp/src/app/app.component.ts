import {Component, Inject} from "@angular/core";
import {IPizza} from "./app.model";
import {IPizzaService, PIZZA_SERVICE} from "./pizza.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pizzas: Array<IPizza>;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: IPizzaService) {
    this.pizzaService.getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas);
  }
}
