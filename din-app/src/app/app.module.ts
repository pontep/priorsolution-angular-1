import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './modules/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForecastFormComponent } from './components/forecast-form/forecast-form.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './modules/history/history.component';
import { WeatherForecastComponent } from './modules/weather-forecast/weather-forecast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginGuard } from './services/login.guard';
import { ExampleComponent } from './modules/example/example.component';
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { R64Component } from './modules/r64/r64.component'

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    ForecastFormComponent,
    DashboardComponent,
    HistoryComponent,
    WeatherForecastComponent,
    ExampleComponent,
    R64Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    LayoutModule,
    HttpClientModule,
    NgbModule,
    RxReactiveFormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
