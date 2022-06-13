import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectPaymentComponent } from './direct-payment.component';

describe('DirectPaymentComponent', () => {
  let component: DirectPaymentComponent;
  let fixture: ComponentFixture<DirectPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
