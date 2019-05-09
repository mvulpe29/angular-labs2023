import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomerValidators {

  static forbiddenEmailValidator(suffix?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && suffix && (<string>(control.value)).endsWith(suffix)) {
        return {forbiddenEmail: "true"};
      }
    }
  }
}
