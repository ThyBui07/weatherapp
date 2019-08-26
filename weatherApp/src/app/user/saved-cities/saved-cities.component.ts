import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/interfaces/city';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.scss']
})
export class SavedCitiesComponent implements OnInit {
  cities: City []; //array
  city: any = {}; //object for NgFor
  panelOpenState = false;
  updateForm = true;
  userId: string;

  constructor(private firebaseService: FirebaseService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      console.log(this.userId);
      this.getCities(this.userId);
    }
  }

  getCities(id: string) {
    this.firebaseService.getUserCities(id).subscribe(
      cities => {
        console.log(cities);
        this.cities = cities;
      }
    );
  }

  updateCity(city: any) {
    this.city.name= city.weather.name;
    this.city.description = city.weather.description;
    this.city.temperature = city.weather.temperature;
    this.city.id = city.id;
  }

  saveUpdateCity (newCity: City) {
    console.log(newCity);
    this.firebaseService.updateCity(this.userId, this.city.id, newCity);
    this.city = {};
  }

  deleteCity(city: City) {
    this.firebaseService.deleteCity(this.userId, city);
  }

}
