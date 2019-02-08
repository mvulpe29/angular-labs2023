import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderServiceProvider} from './order.service';
import {FormsModule} from '@angular/forms';
import { PriceValidatorDirective } from './price-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule
  ],
  declarations: [OrderListComponent, PriceValidatorDirective],
  providers: [OrderServiceProvider]
})
export class OrderModule {
}
