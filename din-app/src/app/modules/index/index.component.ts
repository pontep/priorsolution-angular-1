import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { WeatherForecast } from 'src/app/models/weatherForecast';
import { ForecastService } from 'src/app/services/forecast.service';
import { THAI_PROVINCES } from "../../source/thai-province";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  loading: boolean
  myControl = new FormControl();
  options = THAI_PROVINCES
  filteredOptions: Observable<string[]>;
  selectedProvince: string
  forecast: WeatherForecast

  @Input() title: string
  
  constructor(private forecastService: ForecastService) { }

  getForecast(): void{
    this.loading = true
    this.forecastService.getForecast(this.selectedProvince).subscribe(forecast => {
      this.forecast = forecast
      this.loading = false
      console.log(forecast);
    })
      
  }

  onSubmit(data): void{
    console.log(data);
    
  }
  onAction1(): void{
    console.log('onAction1');
    
  }
  ngOnInit(): void {
    this.getTitle()
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  
  getTitle(): void{
    this.title = 'din-app'
  }


}
