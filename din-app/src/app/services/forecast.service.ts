import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeatherForecast } from '../models/weatherForecast';
import {FORECAST} from '../models/mock-forecast'
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  corsHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000/'
  });
  
  private baseUrl = 'http://localhost:9000/api/'
  private forecastUrl = this.baseUrl + 'weatherforecast/'
  private locationUrl = this.baseUrl + 'locations/'
  constructor(private http: HttpClient) { }

  getForecast(province): Observable<WeatherForecast>{
    return this.http.get<WeatherForecast>(this.forecastUrl+`now?province=${province}`, {
      headers: this.corsHeaders
    })
    // return of(FORECAST)  
  }
  getForecastHistory(province): Observable<WeatherForecast[]>{
    return this.http.get<WeatherForecast[]>(this.forecastUrl+`history?province=${province}`, {
      headers: this.corsHeaders
    })
    // return of(FORECAST)  
  }
  getAllLocations(): Observable<Location[]>{
    return this.http.get<Location[]>(this.locationUrl)
  }
}
