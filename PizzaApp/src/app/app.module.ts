import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {CommonsModule} from './commons/commons.module';
import {CustomerModule} from './customer/customer.module';
import {PizzaModule} from './pizza/pizza.module';


const ROUTES : Routes = [
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    HttpClientModule,
    CommonsModule,
    PizzaModule,
    CustomerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
