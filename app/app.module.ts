import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {SimpleNotificationsModule} from 'angular2-notifications';

import {AppComponent} from './app.component';

@NgModule({
  imports:      [ BrowserModule, SimpleNotificationsModule ],
  declarations: [ AppComponent ],
  providers:    [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
