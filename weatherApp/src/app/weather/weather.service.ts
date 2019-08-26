import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Weather } from '../shared/interfaces/weather';
import { WeatherData } from '../shared/interfaces/weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private URL= 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=';
  private KEY= 'd83374d1d678d118ad4e4909582a5fa3';
  private IMP= '&units=imperial';

  constructor(private http: HttpClient) { }

  searchWeatherData(cityName: string): Observable<Weather> {
    return this
                .http
                .get<WeatherData>(`${this.URL}${cityName}&appid=${this.KEY}${this.IMP}`)
                .pipe(
                  map(data => this.transformData(data)),
                  tap(data => console.log(JSON.stringify(data))),
                  catchError(this.handleError)
                );
  }

  private transformData(data: WeatherData): Weather {
    return {
      name: data.name,
      country: data.sys.country,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: data.main.temp,
      description: data.weather[0].description,
      lat: data.coord.lat,
      lon: data.coord.lon
    };
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res);
    return throwError(res.error || 'Serve error');
  }
}
