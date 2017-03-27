import { TestBed, inject } from '@angular/core/testing';

import { AuthenticatedGuardService } from './authenticated-guard.service';

describe('AuthenticatedGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatedGuardService]
    });
  });

  it('should ...', inject([AuthenticatedGuardService], (service: AuthenticatedGuardService) => {
    expect(service).toBeTruthy();
  }));
});
