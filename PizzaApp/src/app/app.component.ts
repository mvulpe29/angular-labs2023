import {Component} from "@angular/core";
import {IPizza} from "./app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private pizza: IPizza;

  constructor() {
    this.pizza = {
      name: '4 STAGIONI',
      price: 27.5,
      weight: 550,
      ingredients: 'sos rosii, mozzarella, ciuperci, salam, sunca presata, oregano, anghinare',
      canPurchase: true,
      soldOut: false
    }
  }
}
