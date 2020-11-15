import { Location } from './location';

export interface WeatherForecast {
    id:       string;
    time:     string;
    rh:       number;
    tc:       number;
    cond:     number;
    location: Location;
}