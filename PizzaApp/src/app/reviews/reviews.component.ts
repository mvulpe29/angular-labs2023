import {Component, Input, OnInit} from '@angular/core';
import {IReview} from "../app.model";

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input()
  reviews: Array<IReview>;
  newReview: IReview;

  constructor() {
    this.newReview = {};
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.newReview.createdOn = new Date().getMilliseconds();
    this.reviews.push(this.newReview);
    this.newReview = {};
  }
}
