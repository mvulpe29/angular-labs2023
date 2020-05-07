import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
    {path: 'pizzas', loadChildren: () => import('./pizza/pizza.module').then(m => m.PizzaModule)},
    {path: 'customers', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
