import {Injectable, InjectionToken, Provider} from '@angular/core';
import {Router} from "@angular/router";


export interface INavigationService {
  openPizza(id: string): Promise<boolean>;

  openPizzas(): Promise<boolean>;
}


@Injectable()
export class NavigationService implements INavigationService {


  constructor(private router: Router) {
  }

  openPizza(id: string) {
    return this.router.navigate(['pizzas', id]);
  }

  openPizzas() {
    return this.router.navigate(['pizzas']);
  }
}


export const NAVIGATION_SERVICE: InjectionToken<INavigationService> = new InjectionToken('NAVIGATION_SERVICE');

export const NavigationServiceProvider: Provider = {
  provide: NAVIGATION_SERVICE,
  useClass: NavigationService
};
