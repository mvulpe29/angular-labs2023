import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonsModule} from './commons/commons.module';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CommonsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
