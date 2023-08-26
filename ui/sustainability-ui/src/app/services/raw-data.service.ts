import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { RawData } from '../models/raw-data';

@Injectable({
  providedIn: 'root'
})
export class RawDataService {
  private baseUrl: string = 'http://localhost:1337/api';
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  public saveRawData(rawData: RawData): Observable<RawData> {
    const url = `${this.baseUrl}/rawdata`;

    console.log('save')
    return this.http.post<RawData>(url, rawData, { headers: this.headers});
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const msg = error.error instanceof ErrorEvent
    ? error.error.message
    : `Error Code: ${error.status}\nMessage: ${error.message}`;

    return throwError(() => new Error(msg));
  }
}
