import { TestBed, inject } from '@angular/core/testing';

import { PeoplesService } from './peoples.service';

describe('PeoplesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeoplesService]
    });
  });

  it('should be created', inject([PeoplesService], (service: PeoplesService) => {
    expect(service).toBeTruthy();
  }));
});
