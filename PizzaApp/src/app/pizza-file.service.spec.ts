import { TestBed } from '@angular/core/testing';

import { PizzaFileService } from './pizza-file.service';

describe('PizzaFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaFileService = TestBed.get(PizzaFileService);
    expect(service).toBeTruthy();
  });
});
