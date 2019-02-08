import {Component, Inject} from '@angular/core';
import {INavigationService, NAVIGATION_SERVICE} from './commons/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Inject(NAVIGATION_SERVICE) private navigationService: INavigationService) {
  }

  goToPizzas() {
    return this.navigationService.openPizzas();
  }

  goToCustomers() {
    return this.navigationService.openCustomers();
  }
}
