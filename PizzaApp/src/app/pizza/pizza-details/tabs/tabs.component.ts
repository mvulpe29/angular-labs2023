import {Component, Inject, Input} from "@angular/core";
import {IPizza, IReview} from "../../pizza.model";
import {IPizzaService, PIZZA_SERVICE} from "../../pizza.service";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.css']
})
export class TabsComponent {

  @Input()
  pizza: IPizza;

  private tab: number;

  constructor(@Inject(PIZZA_SERVICE)
              private pizzaService: IPizzaService) {
    this.tab = 1;
  }


  public selectTab(tid: number) {
    this.tab = tid;
  }

  public isSelected(tid: number): boolean {
    return this.tab === tid;
  }

  public addReview(review: IReview) {
    this.pizzaService.addReview(this.pizza, review)
      .subscribe(pizza => this.pizza = pizza);
  }

}
