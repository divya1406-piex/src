import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProuctListComponent } from './customer-prouct-list.component';

describe('CustomerProuctListComponent', () => {
  let component: CustomerProuctListComponent;
  let fixture: ComponentFixture<CustomerProuctListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProuctListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProuctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
