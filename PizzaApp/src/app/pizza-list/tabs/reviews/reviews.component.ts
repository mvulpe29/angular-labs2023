import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IReview} from "../../pizza.model";

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input()
  private reviews: Array<IReview>;
  private newReview: IReview;

  @Output()
  private addReview = new EventEmitter<IReview>();

  constructor() {
    this.newReview = {};
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.newReview.createdOn = new Date().getMilliseconds();
    this.addReview.emit(this.newReview);
    this.newReview = {};
  }
}
