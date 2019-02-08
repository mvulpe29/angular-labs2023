import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PizzaListComponent} from './pizza-list/pizza-list.component';
import {PizzaDetailsComponent} from './pizza-details/pizza-details.component';

const routes: Routes = [{
  path: 'pizzas',
  children: [
    {path: '', component: PizzaListComponent},
    {path: ':id', component: PizzaDetailsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule {
}
