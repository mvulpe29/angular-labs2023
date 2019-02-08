import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PizzaRoutingModule} from './pizza-routing.module';
import {TabsComponent} from './pizza-details/tabs/tabs.component';
import {ReviewsComponent} from './pizza-details/tabs/reviews/reviews.component';
import {PizzaListComponent} from './pizza-list/pizza-list.component';
import {IngredientsComponent} from './pizza-details/tabs/ingredients/ingredients.component';
import {ExtrasComponent} from './pizza-details/tabs/extras/extras.component';
import {PizzaDetailsComponent} from './pizza-details/pizza-details.component';
import {FormsModule} from '@angular/forms';
import {PizzaServiceProvider} from "./pizza-rest.service";

@NgModule({
  imports: [
    CommonModule,
    PizzaRoutingModule,
    FormsModule
  ],
  declarations: [
    TabsComponent,
    ReviewsComponent,
    PizzaListComponent,
    IngredientsComponent,
    ExtrasComponent,
    PizzaDetailsComponent
  ],
  providers: [PizzaServiceProvider]
})
export class PizzaModule {
}
