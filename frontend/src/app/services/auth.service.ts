import { Injectable } from '@angular/core';
import { F1Service } from './f1.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _logged: boolean

  constructor(private readonly _f1Service: F1Service) { 
    this._logged = false;
  }

  isLogged(): boolean {
    return this._logged;
  }

  authenticate(login: string, password: string) {
    this._f1Service.getUsers().subscribe((element) => {
      const users = element;

      const user = users.find((user) => user.login === login && user.password === password);

      this._logged = (user !== undefined);
    });
  }
}