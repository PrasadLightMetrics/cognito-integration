import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationRoutingModule } from './authentication/authentication-routing/authentication-routing.module';
import { LoginPageComponent } from './authentication/pages/login-page/login-page.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,    
    LoginPageComponent, HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
