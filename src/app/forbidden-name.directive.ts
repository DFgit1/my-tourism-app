import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function prohibitedValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const prohibited = nameRe.test(control.value);
      return prohibited ? {prohibited: {value: control.value}} : null;
    };
  }