import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  userCollection: AngularFirestoreCollection = this.afs.collection('users'); //trong firebase
  cityCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) { }

  private handleError(res: HttpErrorResponse) {
    console.error(res);
    return throwError(res.error || 'Serve error');
  }

  addCity(userId: string, weather: any) {
    const city = {
      weather,
      time: new Date()
    }
    return this.userCollection.doc(userId).collection('cities').add(city);
  }

  getUserCities(userId: string): Observable<any[]> {
    this.cityCollection = this.afs.collection(`users/${userId}/cities`, (ref) => ref.orderBy('time', 'desc'));
    //getting the snapshot of the collection, map for each one of the document within the collection and return it to the component
    return this.cityCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return { ...data };
      }))
    );
  }
}
