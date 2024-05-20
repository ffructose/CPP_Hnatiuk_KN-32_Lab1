import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidatorService } from "./validator.service";

export function amountValidator(): ValidatorFn {
  return (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    let validator = new ValidatorService()
    let valid =
      !control.value || validator.validate_amount(control.value)
    return valid ? null : { date: true }
  }
}

