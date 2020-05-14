import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreloadSelectedModulesService} from './preload-selected-modules.service';

const routes: Routes = [
    {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
    {
        path: 'pizzas',
        loadChildren: () => import('./pizza/pizza.module').then(m => m.PizzaModule),
        data: {preload: true}
    },
    {path: 'customers', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadSelectedModulesService})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
