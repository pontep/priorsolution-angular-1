import { WeatherForecast } from './weatherForecast';
import { Location } from './location';

const location1: Location = {
  id: 1,
  province: 'กรุงเทพมหานคร',
  region: 'C',
  geocode: '10',
  areatype: 'province',
  tambon: null,
  amphoe: null,
  lat: 13.753958,
  lon: 100.50175,
};
export const FORECAST_HISTORYS: WeatherForecast[] = [
  {
    id: 'กรุงเทพมหานคร2020-11-15T18:00:00+07:00',
    time: '2020-11-15T18:00:00+07:00',
    rh: 44.18,
    tc: 31.63,
    cond: 2,
    location: location1,
  },
  {
    id: 'กรุงเทพมหานคร2020-11-15T19:00:00+07:00',
    time: '2020-11-15T19:00:00+07:00',
    rh: 44.94,
    tc: 31.42,
    cond: 2,
    location: location1,
  },
];
