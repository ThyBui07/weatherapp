import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { Weather } from 'src/app/shared/interfaces/weather';
import { UserAuthService } from 'src/app/user/auth-service.service';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { MatSnackBar } from '@angular/material';
import { User } from 'src/app/shared/interfaces/user';
import { City } from 'src/app/shared/interfaces/city';


@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {
  //property
  get weather(): Weather {
    return this.weatherDataService.weather;
  }
  user$: User;

  constructor(private weatherDataService: WeatherDataService,
              private userAuthService: UserAuthService,
              private fireBaseService: FirebaseService,
              private snackBar: MatSnackBar )
              {
                this.userAuthService.user$.subscribe(user => this.user$ = user );
                //result cotains either our user or no object
                //easy way of grabbing user object in any component
               }

  ngOnInit() {
  }

  addCity() {
    const city: City = {
      name: this.weather.name,
      country: this.weather.country,
      description: this.weather.description,
      temperature: this.weather.temperature,
      lat: this.weather.lat,
      lon: this.weather.lon
    }
    this.fireBaseService.addCity(this.user$.uid, city)
        .then((res) => {
          this.snackBar.open(`Success City Saved`, `OK`, {
            duration: 5000
          })
        })
        .catch((error) =>{
          console.log(error);
        })
  }

}
