import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SavedCitiesComponent } from './saved-cities/saved-cities.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'login',
    pathMatch:'full',
    component: LoginComponent
  },
  {
    path:'cities/:id',
    pathMatch:'full',
    component: SavedCitiesComponent
  },
  {
    path:'profile',
    pathMatch:'full',
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
