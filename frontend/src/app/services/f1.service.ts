import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver, Constructor } from './f1.models';

@Injectable({
  providedIn: 'root'
})
export class F1Service {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.baseUrl}/drivers/all`);
  }

  getConstructors(): Observable<Constructor[]> {
    return this.http.get<Constructor[]>(`${this.baseUrl}/constructors/all`);
  }

  driversGetAllFavorites(): Observable<any> {
    return this.http.get(`${this.baseUrl}/drivers/favorite/all`);
  }

  driversAddFavorite(id: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/drivers/favorite/${id}`, {});
  }

  DriversDeleteFavorite(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/drivers/favorite/${id}`);
  }

  constructorsGetAllFavorites(): Observable<any> {
    return this.http.get(`${this.baseUrl}/constructors/favorite/all`);
  }

  constructorsAddFavorite(id: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/constructors/favorite/${id}`, {});
  }

  constructorsDeleteFavorite(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/constructors/favorite/${id}`);
  }


}
