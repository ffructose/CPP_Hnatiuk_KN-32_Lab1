import { TestBed } from '@angular/core/testing';
import { ValidatorService } from './validator.service';

describe('Лаб8 - ValidatorService', () => {
  let service: ValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Перевіряємо кількість лаб/лекцій = 0', () => {
    let x = service.validate_amount(0);
    expect(x).toBe(false);
  });
  it('Перевіряємо кількість лаб/лекцій = -1', () => {
    let x = service.validate_amount(-1);
    expect(x).toBe(false);
  });
  it('Перевіряємо кількість лаб/лекцій = 1', () => {
    let x = service.validate_amount(1);
    expect(x).toBe(true);
  });

  it('Перевіряємо вид контролю дисципліни = Екзамен', () => {
    let x = service.validate_type("Екзамен");
    expect(x).toBe(true);
  });
  it('Перевіряємо вид контролю дисципліни = Залік', () => {
    let x = service.validate_type("Залік");
    expect(x).toBe(true);
  });
  it('Перевіряємо вид контролю дисципліни = іспит', () => {
    let x = service.validate_type("іспит");
    expect(x).toBe(true);
  });
  it('Перевіряємо вид контролю дисципліни = практика', () => {
    let x = service.validate_type("практика");
    expect(x).toBe(true);
  });
  it('Перевіряємо вид контролю дисципліни = мявк', () => {
    let x = service.validate_type("мявк");
    expect(x).toBe(false);
  });

});
