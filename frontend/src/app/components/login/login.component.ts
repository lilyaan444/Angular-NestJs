import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _errorMessage: string;

  constructor() {
    this._errorMessage = "";
  }

  get errorMessage(): string {
    return this._errorMessage;
  }

  onSubmit(value: any): void {
    console.log(value);
  }
}
