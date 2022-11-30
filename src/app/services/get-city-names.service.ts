import { Injectable } from '@angular/core';
import { GetweatherService } from './getweather.service';

@Injectable({
  providedIn: 'root'
})
export class GetCityNamesService {
  arrayWeather:any;
  arrayNames:any[]= [];

  constructor(private _getW:GetweatherService) {}

  

  getNames() {
    this.arrayNames =[];
    this.arrayWeather = this._getW.getWeather();
    for(var i =0; i<this.arrayWeather.length;i++){
      this.arrayNames.push(this.arrayWeather[i].name);
    }
    return this.arrayNames;
  }

}
