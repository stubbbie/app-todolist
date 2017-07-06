import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {toDoMain} from './toDo/toDoMain' 

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, 
                  toDoMain],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
