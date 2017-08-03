import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationServiceService } from './authentication-service.service';

describe('AuthenticationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationServiceService]
    });
  });

  it('should be created', inject([AuthenticationServiceService], (service: AuthenticationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
