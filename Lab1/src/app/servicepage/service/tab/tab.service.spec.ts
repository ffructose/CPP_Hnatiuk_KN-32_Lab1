import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('Лаб7 - TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Табулювання x=-0.1, y=0.1', () => {
    let x = -0.1;
    let y = 0.1;
    let xy = service.getTab(-0.1,-0.1,0.1);
    let yTab: number | undefined = 5;
    yTab = xy.get(y);
    if (yTab !== undefined) {
      expect(y.toFixed(4)).toBe(yTab.toFixed(4));
    }
    service.getTab(-3.14,3.14,0.1);
  });
});
