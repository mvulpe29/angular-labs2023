import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomerServiceProvider} from './customer.service';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomerListComponent, CustomerDetailsComponent
  ],
  providers: [CustomerServiceProvider],
})
export class CustomerModule {
}
