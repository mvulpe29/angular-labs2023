import {Component, Inject, Optional} from '@angular/core';
import {INavigationService, NAVIGATION_SERVICE} from './commons/navigation.service';
import {MENU_ITEM} from './menu.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: MENU_ITEM,
      useValue: 'Pizza from AppComponent',
      multi: true
    }
  ]
})
export class AppComponent {

  constructor(@Inject(NAVIGATION_SERVICE) private navigationService: INavigationService,
              @Optional() @Inject(MENU_ITEM) private menuItems: string[] | null) {
  }

  goToPizzas() {
    return this.navigationService.openPizzas();
  }

  goToCustomers() {
    return this.navigationService.openCustomers();
  }
}
