import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Source } from '../models/source';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  private baseUrl: string = 'http://localhost:1337/api';
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  public getSources(): Observable<Source[]> {
    const url = `${this.baseUrl}/`;

    return this.http.get<Source[]>(url, { headers: this.headers}).pipe(
      map((res) => {
        return res || [];
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const msg = error.error instanceof ErrorEvent
    ? error.error.message
    : `Error Code: ${error.status}\nMessage: ${error.message}`;

    return throwError(() => new Error(msg));
  }
}
