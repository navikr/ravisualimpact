import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {AppRoutingModule,routableComponents} from './app-routing.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
