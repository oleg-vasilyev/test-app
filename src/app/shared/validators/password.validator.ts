import { ValidatorFn, AbstractControl } from '@angular/forms';

export function PASSWORD_VALIDATOR(
  passwordField: AbstractControl
): ValidatorFn {
  return (confirmPasswordField: AbstractControl): { [key: string]: any } => {

    if (passwordField.pristine || confirmPasswordField.pristine) {
      return null;
    }

    const output = passwordField
      && confirmPasswordField
      && passwordField.value !== confirmPasswordField.value
      ? { passwordsMismatch: true }
      : null;
    return output;
  };
}
