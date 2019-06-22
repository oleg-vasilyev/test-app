import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { LOGIN_VALIDATOR } from '../../shared/validators/login.validator';
import { PASSWORD_VALIDATOR } from '../../shared/validators/password.validator';
import { IUser } from '../../shared/models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private _registrationForm: FormGroup;
  public get registrationForm(): FormGroup {
    return this._registrationForm;
  }

  public get loginField(): AbstractControl {
    return this._registrationForm.get('login');
  }

  public get passwordField(): AbstractControl {
    return this._registrationForm.get('password');
  }

  public get confirmPasswordField(): AbstractControl {
    return this._registrationForm.get('confirmPassword');
  }

  private _registrationErrorMessage: string;
  public get registrationErrorMessage(): string {
    return this._registrationErrorMessage;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._registrationForm = this._formBuilder.group(
      {
        login: [
          '',
          [Validators.required, LOGIN_VALIDATOR()]
        ],
        password: [
          '',
          [Validators.required]
        ],
        confirmPassword: [
          ''
        ]
      }
    );

    this.passwordField
      .setValidators([
        Validators.required,
        PASSWORD_VALIDATOR(this.confirmPasswordField)
      ]);

    this.confirmPasswordField
      .setValidators([
        Validators.required,
        PASSWORD_VALIDATOR(this.passwordField)
      ]);
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
        : this.passwordField.hasError('passwordsMismatch')
          ? 'Passwords must match'
          : '';
    return errorMessage;
  }

  public getConfirmPasswordErrorMessage() {
    const errorMessage =
      this.confirmPasswordField.hasError('required')
        ? 'Password required'
        : this.confirmPasswordField.hasError('passwordsMismatch')
          ? 'Passwords must match'
          : '';
    return errorMessage;
  }

  public onSubmit() {
    const user = {
      login: this.loginField.value,
      password: this.passwordField.value,
      confirmPassword: this.confirmPasswordField.value
    } as IUser;
    this._authService.register(user).catch(e => {
      this._registrationErrorMessage = e.message;
    });
  }
}
