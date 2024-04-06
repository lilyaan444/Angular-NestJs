import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from './f1.models'; // Ajuste le chemin d'import selon ton architecture de fichier
import { Constructor } from './f1.models';

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
}
