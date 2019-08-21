import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { AgmCoreModule } from '@agm/core';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [WeatherViewComponent, WeatherItemComponent, WeatherSearchComponent],
  exports: [WeatherViewComponent, WeatherItemComponent, WeatherSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    WeatherRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    AgmCoreModule,
    NgxAuthFirebaseUIModule,
    MatIconModule,
  ]
})
export class WeatherModule { }
