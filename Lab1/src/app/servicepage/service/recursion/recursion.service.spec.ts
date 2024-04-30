import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('Лаб7 - RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Сума ряду за допомогою рекурсії x=-0.1 y=0.1', () => {
    let x = -0.1;
    let y = 0.1;
    let yRec = service.getRecursion(x, 0, 0);
    expect(y.toFixed(2)).toBe(yRec.toFixed(2));

    service.getTab(-3.14,3.14,0.1);
  });
});
