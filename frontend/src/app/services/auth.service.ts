import { Injectable } from '@angular/core';
import { F1Service } from './f1.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = false;

  constructor(private readonly _f1Service: F1Service) {}

  login() {
    this._isAuthenticated = true;
  }

  logout() {
    this._isAuthenticated = false;
  }

  isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  async authenticate(login: string, password: string): Promise<boolean> {
    const users = await lastValueFrom(this._f1Service.getUsers());

    const user = users.find((user) => user.login === login && user.password === password);

    (user !== undefined) ? this.login() : this.logout();
    
    return this.isAuthenticated();
  }
}