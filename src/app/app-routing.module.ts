import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'cities', component: CitiesComponent},
  {path: 'weather', component: WeatherComponent },
  {path: 'tech-ideas', component: TechIdeasComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'weather/:name/:springN/:springM/:summerN/:summerM/:winterN/:winterM/:autumnN/:autumnM/:visitFrom/:visitTo', component: WeatherDetailsComponent},
  {path: '**', component: NotfoundComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




  

