import { TestBed } from '@angular/core/testing';
import { ValidatorService } from './validator.service';

describe('МКР1 - ValidatorService', () => {
  let service: ValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Перевіряємо кількість стовпчиків/рядків = 0', () => {
    let x = service.validate_amount(0);
    expect(x).toBe(false);
  });

  it('Перевіряємо кількість стовпчиків/рядків = 11', () => {
    let x = service.validate_amount(11);
    expect(x).toBe(false);
  });

  it('Перевіряємо кількість стовпчиків/рядків = 5', () => {
    let x = service.validate_amount(5);
    expect(x).toBe(true);
  });


  it('Перевіряємо кількість стовпчиків/рядків = 1.5', () => {
    let x = service.validate_amount(1.5);
    expect(x).toBe(false);
  });

  it('Перевіряємо кількість стовпчиків/рядків = 5.0', () => {
    let x = service.validate_amount(5.0);
    expect(x).toBe(true);
  });

  it('Перевіряємо кількість стовпчиків/рядків = 6.99', () => {
    let x = service.validate_amount(6.99);
    expect(x).toBe(false);
  });
});
