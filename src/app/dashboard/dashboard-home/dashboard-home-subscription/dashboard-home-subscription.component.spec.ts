import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomeSubscriptionComponent } from './dashboard-home-subscription.component';

describe('DashboardHomeSubscriptionComponent', () => {
  let component: DashboardHomeSubscriptionComponent;
  let fixture: ComponentFixture<DashboardHomeSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHomeSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHomeSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
