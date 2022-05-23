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
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        CommonModule,
        CustomerRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatSortModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatSelectModule
    ],
  declarations: [
    CustomerListComponent, CustomerDetailsComponent, CustomerEditComponent, ForbiddenEmailValidatorDirective
  ],
  providers: [CustomerServiceProvider],
})
export class CustomerModule {
}
