import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerServiceProvider } from './customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerEditComponent } from './customer-details/customer-edit/customer-edit.component';
import { ForbiddenEmailValidatorDirective } from './forbidden-email-validator.directive';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        CustomerRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule
    ],
  declarations: [
    CustomerListComponent, CustomerDetailsComponent, CustomerEditComponent, ForbiddenEmailValidatorDirective
  ],
  providers: [CustomerServiceProvider],
})
export class CustomerModule {
}
