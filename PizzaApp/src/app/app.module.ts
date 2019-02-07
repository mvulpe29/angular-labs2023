import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TabsComponent} from './tabs/tabs.component';
import {FormsModule} from "@angular/forms";
import {ReviewsComponent} from './reviews/reviews.component';
import {PizzaFileService} from "./pizza-file.service";

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PizzaFileService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
