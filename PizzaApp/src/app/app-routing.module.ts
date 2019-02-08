import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
  {path: 'pizzas', loadChildren: './pizza/pizza.module#PizzaModule'},
  {path: 'customers', loadChildren: './customer/customer.module#CustomerModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
