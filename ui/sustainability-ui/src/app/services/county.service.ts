import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { County } from '../models/county';
import { Observable, catchError, map, throwError } from 'rxjs';
import {CountyData} from "../models/countyData";

@Injectable({
  providedIn: 'root'
})
export class CountyService {
  private baseUrl: string = 'http://localhost:1337/api';
  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  public getCounties(): Observable<County[]> {
    const url = `${this.baseUrl}/counties`;

    return this.http.get<County[]>(url, {headers: this.headers}).pipe(
      map((res) => {
        return res || [];
      }),
      catchError(this.handleError)
    );
  }

  public getCountiesData(): Observable<CountyData[]> {
    const url = `${this.baseUrl}/counties/data`;

    return this.http.get<CountyData[]>(url, {headers: this.headers}).pipe(
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
