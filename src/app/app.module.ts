import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationRoutingModule } from './authentication/authentication-routing/authentication-routing.module';
import { LoginPageComponent } from './authentication/pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,    
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
