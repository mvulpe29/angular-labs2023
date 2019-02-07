import { TestBed } from '@angular/core/testing';

import { PizzaService } from './pizza.service';

describe('PizzaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaService = TestBed.get(PizzaService);
    expect(service).toBeTruthy();
  });
});
