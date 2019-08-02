import { SubscriptionPaymentFrequency } from './subscription-payment-frequency.enum';
import { ObjectID } from './object-id';
import { Brand } from './brand';

export interface Subscription extends ObjectID {
  source?: string;
  brand?: Brand;
  paymentFrequency: SubscriptionPaymentFrequency;
  amount: number;
}
