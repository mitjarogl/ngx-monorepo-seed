import { AbstractControl } from '@angular/forms';

export class PasswordRepeatValidator {

  static matchPassword(AC: AbstractControl) {
    const password = AC.get('password').value;
    const confirmPassword = AC.get('password2').value;
    if (password !== confirmPassword) {
      AC.get('password2').setErrors({ matchPassword: true });
      return true;
    } else {
      return false;
    }
  }
}
