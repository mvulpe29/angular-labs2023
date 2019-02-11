import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonsModule} from './commons/commons.module';
import {AppRoutingModule} from './app-routing.module';
import {PreloadSelectedModulesService} from './preload-selected-modules.service';
import {CustomerGuard} from './app.guards';
import {AuthModule} from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CommonsModule,
    AuthModule
  ],
  bootstrap: [AppComponent],
  providers: [PreloadSelectedModulesService, CustomerGuard]
})
export class AppModule {
}
