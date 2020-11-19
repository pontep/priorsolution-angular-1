import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  @Input() deviceXs: boolean
  @Input() title: string

  handleToHomePage(): void{
    location.replace('/')
  }
  handleToHistoryPage(){
    location.assign('/history')
  }
  handleToWeatherForecastPage(){
    location.assign('/weather-forecast')
  }
}
