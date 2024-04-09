import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Form } from '../../services/f1.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _errorMessage: string;

  constructor(
    private readonly _router: Router, 
    private readonly _loginService: LoginService
  ) {
    this._errorMessage = "";
  }

  get errorMessage(): string {
    return this._errorMessage;
  }

  onSubmit(form: Form): void {
    this._loginService.getUsers().subscribe((element) => {
      const users = element;

      const user = users.find((user) => user.login === form.login);

      if (user !== undefined) {
        if (user.password === form.password) {
          this._router.navigate(["/home"]);
        }
        else {
          this._errorMessage = "mot de passe incorrect";
        }
      }
      else {
        this._errorMessage = "utilisateur introuvable";
      }
    });
  }
}