import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';

const routes: Routes = [
  {path: '', component: CustomerListComponent},
  {path: ':id', component: CustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
