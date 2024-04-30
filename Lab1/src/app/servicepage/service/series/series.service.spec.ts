import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('Лаб7 - SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Сума ряду значення x=-0.1 y=0.1', () => {
    let x = -0.1;
    let y = 0.1;
    let ySer = service.getSeries(x);
    expect(y.toFixed(4)).toBe(ySer.toFixed(4));

    service.getTab(-3.14, 3.14,0.1);

  });


});
