import {Component} from "@angular/core";
import {IPizza} from "./app.model";
import {PizzaRestService} from "./pizza-rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pizzas: Array<IPizza>;

  constructor(private pizzaService: PizzaRestService) {
    this.pizzaService.getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas);
  }
}
