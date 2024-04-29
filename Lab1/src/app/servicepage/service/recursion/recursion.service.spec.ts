import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Сума ряду за допомогою рекурсії x=0.1 y=0.9983', () => {
    let x = 0.1;
    let y = 0.9983;
    let y1 = 1;
    service.getRecursion(x, -1, 1, 2, y1);

    expect(y.toFixed(2)).toBe(y1.toFixed(2));
  });
});
