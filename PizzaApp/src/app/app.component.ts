import {Component} from "@angular/core";
import {IPizza} from "./app.model";
import {PizzaFileService} from './pizza-file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private pizzas: Array<IPizza>;

  constructor(private pizzaService: PizzaFileService) {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
