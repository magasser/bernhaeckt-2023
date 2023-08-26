import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import {Indicator} from "../models/indicator";
import {County} from "../models/county";

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {
  private baseUrl: string = 'http://localhost:1337/api';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  public getIndicators(): Observable<Indicator[]> {
    const url = `${this.baseUrl}/indicators`;

    return this.http.get<Indicator[]>(url, {headers: this.headers}).pipe(
      map((res) => {
        return res || [];
      }),
      catchError(this.handleError)
    );
  }

  public saveIndicator(indicator: Indicator): Observable<County> {
    const url = `${this.baseUrl}/indicators`;

    return this.http.post<County>(url, indicator, { headers: this.headers});
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const msg = error.error instanceof ErrorEvent
      ? error.error.message
      : `Error Code: ${error.status}\nMessage: ${error.message}`;

    return throwError(() => new Error(msg));
  }
}
