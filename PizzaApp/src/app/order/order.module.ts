import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderServiceProvider} from './order.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PriceValidatorDirective} from './price-validator.directive';
import {PizzaSelectionComponent} from './pizza-selection/pizza-selection.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [OrderListComponent, PriceValidatorDirective, PizzaSelectionComponent],
  providers: [OrderServiceProvider]
})
export class OrderModule {
}
