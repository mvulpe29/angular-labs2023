import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDetailsComponent } from './pizza-details.component';

describe('PizzaDetailsComponent', () => {
  let component: PizzaDetailsComponent;
  let fixture: ComponentFixture<PizzaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
