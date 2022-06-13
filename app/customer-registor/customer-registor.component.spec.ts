import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegistorComponent } from './customer-registor.component';

describe('CustomerRegistorComponent', () => {
  let component: CustomerRegistorComponent;
  let fixture: ComponentFixture<CustomerRegistorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRegistorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRegistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
