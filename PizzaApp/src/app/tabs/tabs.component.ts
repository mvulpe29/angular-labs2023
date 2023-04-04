import {Component, Input} from "@angular/core";
import {IPizza, IReview} from "../app.model";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.css']
})
export class TabsComponent {

  @Input()
  pizza: IPizza;

  private tab: number;
  newReview: IReview;

  constructor() {
    this.tab = 1;
    this.newReview = {};
  }

  public selectTab(tid: number) {
    this.tab = tid;
  }

  public isSelected(tid: number): boolean {
    return this.tab === tid;
  }

  public onSubmit() {
    this.newReview.createdOn = new Date().getMilliseconds();
    this.pizza.reviews.push(this.newReview);
    this.newReview = {};
  }
}
