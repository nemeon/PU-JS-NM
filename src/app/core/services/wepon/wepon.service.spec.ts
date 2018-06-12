import { TestBed, inject } from '@angular/core/testing';

import { WeponService } from './wepon.service';

describe('WeponService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeponService]
    });
  });

  it('should be created', inject([WeponService], (service: WeponService) => {
    expect(service).toBeTruthy();
  }));
});
