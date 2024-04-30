import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  validate_amount(value: number) {
    if (value <= 0) return false
    return true;
  }

  validate_type(value: string) {
    let typeArray: string[] = ['іспит', 'екзамен', 'залік', 'практика'];
    if (typeArray.includes(value.toLowerCase())) return true;
    return false;
  }


  constructor() { }
}
