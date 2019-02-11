import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthServiceProvider} from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthServiceProvider]
})
export class AuthModule {
}
