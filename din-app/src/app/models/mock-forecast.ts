import { Location } from './location';
import { WeatherForecast } from './weatherForecast';
const MOCK_LOCATION: Location = {
      id: 1,
      province: 'กรุงเทพมหานคร',
      region: 'C',
      geocode: '10',
      areatype: 'province',
      tambon: null,
      amphoe: null,
      lat: 13.753958,
      lon: 100.50175
}

export const FORECAST: WeatherForecast = {
    id: 'กรุงเทพมหานคร2020-11-15T18:00:00+07:00',
    time: '2020-11-15T18:00:00+07:00',
    rh: 44.18,
    tc: 31.63,
    cond: 2,
    location: MOCK_LOCATION
  }