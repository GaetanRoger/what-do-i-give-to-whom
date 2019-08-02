import { Component, Input } from '@angular/core';
import { Subscription } from '../../../models/subscription';

@Component({
  selector: 'wgw-dashboard-home-subscription',
  templateUrl: './dashboard-home-subscription.component.html',
  styleUrls: ['./dashboard-home-subscription.component.scss']
})
export class DashboardHomeSubscriptionComponent {
  @Input() subscription: Subscription;

  get hasBrand(): boolean {
    return !!this.subscription.brand;
  }

  get brandImageLink(): string {
    return `/assets/brands/${this.subscription.brand.images.logo}`;
  }

  get brandAlt(): string {
    return `Logo of the ${this.subscription.brand.name} brand.`;
  }

}
