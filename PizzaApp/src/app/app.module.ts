import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TabsComponent} from "./tabs/tabs.component";
import {FormsModule} from "@angular/forms";
import {PizzaFileService} from './pizza-file.service';
import {ReviewsComponent} from "./reviews/reviews.component";
import {PizzaRestService} from "./pizza-rest.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PizzaFileService, PizzaRestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
