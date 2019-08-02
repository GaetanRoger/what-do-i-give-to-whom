import { Injectable } from '@angular/core';
import { CrudRead } from '../crud-read';
import { Subscription } from '../../../models/subscription';
import { SUBSCRIPTIONS } from '../../../../assets/mocks/subscriptions';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService implements CrudRead<Subscription> {
  getAll(): Observable<Subscription[]> {
    return of(SUBSCRIPTIONS);
  }

  get(id: string): Observable<Subscription> {
    return of(SUBSCRIPTIONS.find(s => s.objectID === id));
  }
}
