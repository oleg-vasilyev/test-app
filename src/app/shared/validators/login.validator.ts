import { ValidatorFn, AbstractControl } from '@angular/forms';

export function LOGIN_VALIDATOR(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {

    const phoneRegExp = /^((8|\+)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (phoneRegExp.test(control.value)) {
      return null;
    }
    if (emailRegExp.test(control.value)) {
      return null;
    }

    return {
      invalidLogin: true
    };
  };
}
