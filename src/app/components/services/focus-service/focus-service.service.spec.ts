import { TestBed, inject } from '@angular/core/testing';

import { FocusServiceService } from './focus-service.service';

describe('FocusServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FocusServiceService]
    });
  });

  it('should be created', inject([FocusServiceService], (service: FocusServiceService) => {
    expect(service).toBeTruthy();
  }));
});
