import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page2Component } from './modules/page2/page2.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { IndexComponent } from './modules/index/index.component';
import { MatSliderModule } from '@angular/material/slider'
@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    AppHeaderComponent,
    AppFooterComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
