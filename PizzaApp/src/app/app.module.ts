import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TabsComponent} from './pizza/pizza-details/tabs/tabs.component';
import {FormsModule} from '@angular/forms';
import {ReviewsComponent} from './pizza/pizza-details/tabs/reviews/reviews.component';
import {PizzaServiceProvider} from './pizza/pizza-rest.service';
import {HttpClientModule} from '@angular/common/http';
import {PizzaListComponent} from './pizza/pizza-list/pizza-list.component';
import {IngredientsComponent} from './pizza/pizza-details/tabs/ingredients/ingredients.component';
import {ExtrasComponent} from './pizza/pizza-details/tabs/extras/extras.component';
import {PizzaDetailsComponent} from './pizza/pizza-details/pizza-details.component';
import {RouterModule} from '@angular/router';
import {CommonsModule} from './commons/commons.module';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerDetailsComponent} from './customer/customer-details/customer-details.component';
import {CustomerServiceProvider} from './customer/customer.service';


const ROUTES = [
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
  {
    path: 'pizzas',
    children: [
      {path: '', component: PizzaListComponent},
      {path: ':id', component: PizzaDetailsComponent}
    ]
  },
  {
    path: 'customers',
    children: [
      {path: '', component: CustomerListComponent},
      {path: ':id', component: CustomerDetailsComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ReviewsComponent,
    PizzaListComponent,
    IngredientsComponent,
    ExtrasComponent,
    PizzaDetailsComponent,
    CustomerListComponent,
    CustomerDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonsModule
  ],
  providers: [PizzaServiceProvider, CustomerServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
