import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TabsComponent} from "./pizza/pizza-details/tabs/tabs.component";
import {FormsModule} from "@angular/forms";
import {ReviewsComponent} from "./pizza/pizza-details/tabs/reviews/reviews.component";
import {PizzaServiceProvider} from "./pizza/pizza-rest.service";
import {HttpClientModule} from "@angular/common/http";
import {ExtrasComponent} from './pizza/pizza-details/tabs/extras/extras.component';
import {IngredientsComponent} from './pizza/pizza-details/tabs/ingredients/ingredients.component';
import {PizzaListComponent} from './pizza/pizza-list/pizza-list.component';
import {CommonsModule} from "./commons/commons.module";
import {RouterModule, Routes} from "@angular/router";
import {PizzaDetailsComponent} from './pizza/pizza-details/pizza-details.component';
import {AuthServiceProvider} from "./auth/auth.service";
import {CustomerComponent} from './customer/customer.component';
import {CustomerGuard} from "./customer.guard";

const PIZZA_ROUTES : Routes = [
  {
    path: 'pizzas',
    children: [
      {path: '', component: PizzaListComponent},
      {path: ':id', component: PizzaDetailsComponent}
    ]
  },
  {
    path: 'customers',
    component: CustomerComponent,
    canActivate: [CustomerGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ReviewsComponent,
    ExtrasComponent,
    IngredientsComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    CustomerComponent
  ],
  imports: [
    RouterModule.forRoot(PIZZA_ROUTES),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonsModule
  ],
  providers: [PizzaServiceProvider, AuthServiceProvider, CustomerGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
