import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {IPizzaOrder} from './pizza-order.model';

@Directive({
  selector: '[price-validator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PriceValidatorDirective,
      multi: true
    }
  ]
})
export class PriceValidatorDirective implements Validator {
  minPrice = 40;

  validate(control: AbstractControl): ValidationErrors | any {
    if (control.value) {
      const totalPrice = control.value.reduce((price, pizzaOrder: IPizzaOrder) => {
        return price + pizzaOrder.quantity * pizzaOrder.pizza.price;
      }, 0);
      if (totalPrice < this.minPrice) {
        return {
          'price-validator': true
        };
      }
    }
    return undefined;
  }

}
