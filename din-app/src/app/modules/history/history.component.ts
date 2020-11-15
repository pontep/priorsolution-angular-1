import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location';
import { WeatherForecast } from 'src/app/models/weatherForecast';
import { ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  loading: boolean
  selectedLocation: string;
  locations: Location[];
  forecasts: WeatherForecast[];

  constructor(private forecastService: ForecastService) {}

  ngOnInit(): void {
    this.getAllLocations();
  }

  getAllLocations(): void {
    this.forecastService.getAllLocations().subscribe((locations) => {
      this.locations = locations;
      console.log(this.locations);
    });
  }
  forecastHistory(): void{
    this.loading = true
    this.forecastService.getForecastHistory(this.selectedLocation).subscribe(forecastsHistory => {
      this.forecasts = forecastsHistory
      this.loading = false
      console.log(this.forecasts);
      
    })
  }
}
