import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TabsComponent} from "./pizza-list/tabs/tabs.component";
import {FormsModule} from "@angular/forms";
import {ReviewsComponent} from "./pizza-list/tabs/reviews/reviews.component";
import {PizzaServiceProvider} from "./pizza-list/pizza-rest.service";
import {HttpClientModule} from "@angular/common/http";
import {ExtrasComponent} from './pizza-list/tabs/extras/extras.component';
import {IngredientsComponent} from './pizza-list/tabs/ingredients/ingredients.component';
import {PizzaListComponent} from './pizza-list/pizza-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ReviewsComponent,
    ExtrasComponent,
    IngredientsComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PizzaServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
