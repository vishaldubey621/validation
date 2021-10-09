import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListContainerComponent } from './customer-list-container.component';

describe('CustomerListContainerComponent', () => {
  let component: CustomerListContainerComponent;
  let fixture: ComponentFixture<CustomerListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
