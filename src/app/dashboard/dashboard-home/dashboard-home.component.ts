import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../models/subscription';
import { SubscriptionsService } from '../../shared/services/subscriptions/subscriptions.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'wgw-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  subscriptions$: Observable<Subscription[]>;

  constructor(private readonly subscriptionsService: SubscriptionsService) { }

  get totalAmountSentence$(): Observable<string> {
    return this.totalAmount$.pipe(
      map(a => `${a} €`)
    );
  }

  get totalAmount$(): Observable<number> {
    return this.subscriptions$
      .pipe(
        map(subs => subs.reduce((acc, sub) => acc + sub.amount, 0))
      );
  }

  ngOnInit() {
    this.subscriptions$ = this.subscriptionsService.getAll();
  }

  trackByObjectID(subscription: Subscription): string {
    return subscription.objectID;
  }

}
