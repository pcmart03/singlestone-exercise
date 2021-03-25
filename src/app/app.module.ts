import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HomepageModule} from './homepage/homepage.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomepageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
