import { Subscription } from '../../app/models/subscription';
import { SubscriptionPaymentFrequency } from '../../app/models/subscription-payment-frequency.enum';
import { BRANDS } from './brands';

export const SUBSCRIPTIONS: Subscription[] = [
  {
    objectID: '1',
    brand: BRANDS.find(b => b.objectID === 'netflix'),
    amount: 14,
    paymentFrequency: SubscriptionPaymentFrequency.MONTHLY
  },
  {
    objectID: '2',
    brand: BRANDS.find(b => b.objectID === 'streetpress'),
    amount: 6,
    paymentFrequency: SubscriptionPaymentFrequency.MONTHLY
  },
  {
    objectID: '3',
    brand: BRANDS.find(b => b.objectID === 'unicef'),
    amount: 15,
    paymentFrequency: SubscriptionPaymentFrequency.MONTHLY
  },
  {
    objectID: '4',
    source: 'Mediapart',
    amount: 11,
    paymentFrequency: SubscriptionPaymentFrequency.MONTHLY
  }
];
