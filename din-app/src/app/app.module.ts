import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page2Component } from './modules/page2/page2.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { IndexComponent } from './modules/index/index.component';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    AppHeaderComponent,
    AppFooterComponent,
    IndexComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
