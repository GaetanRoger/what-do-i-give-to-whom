import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardHomeSubscriptionComponent } from './dashboard-home/dashboard-home-subscription/dashboard-home-subscription.component';
import { AddSubscriptionPopupComponent } from './dashboard-home/add-subscription-popup/add-subscription-popup.component';


@NgModule({
  declarations: [DashboardHomeComponent, DashboardHomeSubscriptionComponent, AddSubscriptionPopupComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  entryComponents: [AddSubscriptionPopupComponent]
})
export class DashboardModule { }
