import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../shared/interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  user$: Observable <User | null>;

  constructor(private http: HttpClient, private router: Router, public afAuth: AngularFireAuth, private snackBar: MatSnackBar) {
    this.user$ = this.afAuth.authState;
   }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.snackBar.open(`Sign Out Successful`, `OK`, {
        duration: 5000
      });
      this.router.navigate(['/weather']);
    })
  }
}
