import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubscriptionPopupComponent } from './add-subscription-popup.component';

describe('AddSubscriptionPopupComponent', () => {
  let component: AddSubscriptionPopupComponent;
  let fixture: ComponentFixture<AddSubscriptionPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubscriptionPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubscriptionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
