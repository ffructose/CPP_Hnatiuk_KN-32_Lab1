import { TestBed } from '@angular/core/testing';

import { ConfigBdService } from './config-bd.service';

describe('ConfigService', () => {
  let service: ConfigBdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigBdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
