import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { WeatherForecast } from 'src/app/models/weatherForecast';
import { ForecastService } from 'src/app/services/forecast.service';
import { THAI_PROVINCES } from '../../source/thai-province';
import {
  WEATHER_CONDITION,
  WEATHER_CONDITION_ICON,
} from '../../mock/weather-condition';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  loading: boolean;
  myControl = new FormControl();
  options = THAI_PROVINCES;
  filteredOptions: Observable<string[]>;
  selectedProvince: string;
  forecast: WeatherForecast;
  weatherCondition = WEATHER_CONDITION;
  weatherConditionIcon = WEATHER_CONDITION_ICON;
  @Input() title: string;

  constructor(private forecastService: ForecastService) {}

  getForecast(): void {
    this.loading = true;
    this.forecastService
      .getForecast(this.selectedProvince)
      .subscribe((forecast) => {
        this.forecast = forecast;
        this.loading = false;
        console.log(forecast);
      });
  }

  onSubmit(data): void {
    console.log(data);
  }
  ngOnInit(): void {
    console.log(this.weatherCondition);
    
    console.log(this.weatherConditionIcon);
    
    this.getTitle();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
    // this.forecast = FORECAST
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }

  getTitle(): void {
    this.title = 'din-app';
  }

}
