import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TabsComponent} from './tabs/tabs.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
