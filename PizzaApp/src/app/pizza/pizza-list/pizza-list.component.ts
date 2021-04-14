import {Component, Inject, OnInit} from '@angular/core';
import {IPizzaService, PIZZA_SERVICE} from "../pizza.service";
import {IPizza} from "../pizza.model";
import {INavigationService, NAVIGATION_SERVICE} from "../../commons/navigation.service";

@Component({
  selector: 'pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzas: Array<IPizza>;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: IPizzaService,
              @Inject(NAVIGATION_SERVICE) private navigationService: INavigationService) {
    this.pizzaService.getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas);
  }

  ngOnInit() {
  }

  goToPizza(pizza: IPizza): Promise<boolean> {
    return this.navigationService.openPizza(pizza.id);
  }

}
