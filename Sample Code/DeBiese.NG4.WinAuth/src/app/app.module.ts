import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import * as svcs from './services/';
import * as int from './interceptors/';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: int.WinAuthInterceptor,
      multi: true
    },
    svcs.AuthenticationServiceService,
    svcs.DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
