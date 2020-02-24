import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { ScrollBottomComponent } from './scroll-bottom/scroll-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScrollTopComponent,
    ScrollBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
