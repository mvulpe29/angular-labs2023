import {Component, Inject, OnInit} from '@angular/core';
import {IPizzaService, PIZZA_SERVICE} from "./pizza.service";
import {IPizza} from "./pizza.model";

@Component({
  selector: 'pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzas: Array<IPizza>;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: IPizzaService) {
    this.pizzaService.getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas);
  }

  ngOnInit() {
  }

}
