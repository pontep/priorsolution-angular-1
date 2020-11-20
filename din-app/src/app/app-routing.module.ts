import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './modules/example/example.component';
import { HistoryComponent } from './modules/history/history.component';
import { IndexComponent } from './modules/index/index.component';
import { WeatherForecastComponent } from './modules/weather-forecast/weather-forecast.component';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'weather-forecast',
    component: WeatherForecastComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
