import {Component, Inject, Input, OnInit} from '@angular/core';
import {IPizza, IReview} from "../../pizza.model";
import {IPizzaService, PIZZA_SERVICE} from "../../pizza.service";

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input()
  private pizza: IPizza;
  private newReview: IReview;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: IPizzaService) {
    this.newReview = {};
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.newReview.createdOn = new Date().getMilliseconds();
    this.pizzaService.addReview(this.pizza, this.newReview)
      .subscribe(pizza => {
        this.pizza = pizza;
        this.newReview = {};
      });

    this.newReview = {};
  }
}
