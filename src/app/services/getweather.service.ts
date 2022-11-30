import { Injectable } from '@angular/core';
import { citiesWeather } from '../components/weather/city-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetweatherService {

  constructor() {citiesWeather }

  getWeather(){
    return citiesWeather
  }

}
