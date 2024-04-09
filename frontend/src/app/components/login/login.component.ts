import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Form } from '../../services/f1.models'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _errorMessage: string;

  constructor(
    private readonly _router: Router, 
    private readonly _authService: AuthService
  ) {
    this._errorMessage = "";
  }

  get errorMessage(): string {
    return this._errorMessage;
  }

  async onSubmit(form: Form) {
    const isAuthenticated = await this._authService.authenticate(form.login, form.password);

    if (isAuthenticated) {
      this._router.navigate(["/home"]);
    }
    else {
      this._errorMessage = "login ou mot de passe incorrect";
    }
  }
}