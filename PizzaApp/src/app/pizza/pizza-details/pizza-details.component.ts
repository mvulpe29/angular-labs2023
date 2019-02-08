import {Component, Inject, OnInit} from '@angular/core';
import {IPizza} from "../pizza.model";
import {IPizzaService, PIZZA_SERVICE} from "../pizza.service";
import {ActivatedRoute} from "@angular/router";
import {INavigationService, NAVIGATION_SERVICE} from "../../commons/navigation.service";

@Component({
  selector: 'pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {
  private pizza: IPizza;

  constructor(@Inject(PIZZA_SERVICE)
              private pizzaService: IPizzaService,
              private activatedRoute: ActivatedRoute,
              @Inject(NAVIGATION_SERVICE)
              private navigationService: INavigationService) {
  }

  ngOnInit() {
    this.pizzaService.getPizza(this.activatedRoute.snapshot.params['id']).subscribe(pizza => {
      this.pizza = pizza;
    });
  }

  goBack(): Promise<boolean> {
    return this.navigationService.openPizzas();
  }

}
