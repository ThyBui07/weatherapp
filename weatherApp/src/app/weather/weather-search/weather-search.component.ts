import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherDataService } from '../weather-data.service';
import { Weather } from 'src/app/shared/interfaces/weather';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {
  query = '';
  errorMessage = '';

  constructor(private weatherService: WeatherService, private weatherDataService: WeatherDataService) { }

  ngOnInit() {
  }

  set weather (data: Weather){
    this.weatherDataService.weather = data;
  }

  async search(){
    await this.weatherService.searchWeatherData(this.query).subscribe(
      data => this.weather = data,
      // console.log(this.weather),
      error => this.errorMessage = <any>error,
      // restart the query to empty string
      () => this.query = ''
    );
  }
}
