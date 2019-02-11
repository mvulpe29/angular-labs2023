import {InjectionToken, Provider} from '@angular/core';

export const MENU_ITEM: InjectionToken<string> = new InjectionToken('MENU_ITEM');

export const MenuProviders: Provider[] = [
  {
    provide: MENU_ITEM,
    useValue: 'Pizza',
    multi: true
  },
  {
    provide: MENU_ITEM,
    useValue: 'Customers',
    multi: true
  }
];
