import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';

const routes: Routes = [
  {
    path: 'customers',
    children: [
      {path: '', component: CustomerListComponent},
      {path: ':id', component: CustomerDetailsComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
