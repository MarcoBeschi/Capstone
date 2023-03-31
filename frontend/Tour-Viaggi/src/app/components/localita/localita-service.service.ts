import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Localita } from './localita.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalitaServiceService {
  private baseUrl = 'http://localhost:8080/api/localita'

  constructor(private http:HttpClient) { }

  getLocalita(): Observable<Localita[]> {
    return this.http.get<Localita[]>(this.baseUrl)
      .pipe(
        catchError((error: any) => {
          if (error instanceof SyntaxError) {
            console.error('Error parsing JSON data:', error);
          } else {
            console.error('Error fetching data:', error);
          }
          return throwError(error);
        })
      );
  }
}
