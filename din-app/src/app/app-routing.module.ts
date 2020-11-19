import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './modules/history/history.component';
import { IndexComponent } from './modules/index/index.component';
import { WeatherForecastComponent } from './modules/weather-forecast/weather-forecast.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'weather-forecast',
    component: WeatherForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
