import { TestBed, inject } from '@angular/core/testing';

import { DataServiceService } from './data-service.service';

describe('DataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataServiceService]
    });
  });

  it('should be created', inject([DataServiceService], (service: DataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
