import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonsModule} from './commons/commons.module';
import {CustomerModule} from './customer/customer.module';
import {PizzaModule} from './pizza/pizza.module';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
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
