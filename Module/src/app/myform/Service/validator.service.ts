import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  validate_amount(value: number) {
    if (value > 10 || value < 1 || !Number.isInteger(value)) return false
    return true;
  }

  constructor() { }
}
