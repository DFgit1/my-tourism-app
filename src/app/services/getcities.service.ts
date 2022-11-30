import { Injectable } from '@angular/core';
import { citiesInfo } from '../components/cities/cities-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetcitiesService {



  constructor() {citiesInfo}

  getCities() {
    return citiesInfo;
    
  }
  
}
