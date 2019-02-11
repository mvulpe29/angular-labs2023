import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreloadSelectedModulesService} from './preload-selected-modules.service';
import {CustomerGuard} from './app.guards';

const routes: Routes = [
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
  {path: 'pizzas', loadChildren: './pizza/pizza.module#PizzaModule', data: {preload: true}},
  {path: 'customers', loadChildren: './customer/customer.module#CustomerModule', canActivate: [CustomerGuard]},
  {path: 'orders', loadChildren: './order/order.module#OrderModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadSelectedModulesService})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
