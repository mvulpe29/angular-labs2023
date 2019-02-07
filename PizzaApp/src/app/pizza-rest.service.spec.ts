import { TestBed } from '@angular/core/testing';

import { PizzaRestService } from './pizza-rest.service';

describe('PizzaRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaRestService = TestBed.get(PizzaRestService);
    expect(service).toBeTruthy();
  });
});
