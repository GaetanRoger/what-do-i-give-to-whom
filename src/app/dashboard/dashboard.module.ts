import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardHomeSubscriptionComponent } from './dashboard-home/dashboard-home-subscription/dashboard-home-subscription.component';


@NgModule({
  declarations: [DashboardHomeComponent, DashboardHomeSubscriptionComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
