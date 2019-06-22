import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { LOGIN_VALIDATOR } from '../../shared/validators/login.validator';
import { IUser } from 'src/app/shared/models/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _loginForm: FormGroup;
  public get loginForm(): FormGroup {
    return this._loginForm;
  }

  public get loginField(): AbstractControl {
    return this._loginForm.get('login');
  }

  public get passwordField(): AbstractControl {
    return this._loginForm.get('password');
  }

  private _loginErrorMessage: string;
  public get loginErrorMessage(): string {
    return this._loginErrorMessage;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._loginForm = this._formBuilder.group(
      {
        login: [
          '',
          [Validators.required, LOGIN_VALIDATOR()]
        ],
        password: [
          '',
          [Validators.required]
        ]
      }
    );
  }

  public getLoginErrorMessage() {
    const errorMessage =
      this.loginField.hasError('required')
        ? 'You must enter a value'
        : this.loginField.hasError('invalidLogin')
          ? 'Not a valid phone or email'
          : '';
    return errorMessage;
  }

  public getPasswordErrorMessage() {
    const errorMessage =
      this.passwordField.hasError('required')
        ? 'Password required'
        : '';
    return errorMessage;
  }

  public onSubmit() {
    const user = {
      login: this.loginField.value,
      password: this.passwordField.value
    } as IUser;
    this._authService.login(user).catch(e => {
      this._loginErrorMessage = e.message;
    });
  }
}
