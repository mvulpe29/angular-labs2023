import {Component} from '@angular/core';
import {IPizza} from './app.model';
import {PIZZAS} from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pizzas: Array<IPizza>;

  constructor() {
    this.pizzas = PIZZAS;
  }
}
