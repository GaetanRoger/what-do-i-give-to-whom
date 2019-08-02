import { Subscription } from '../../models/subscription';
import { Brand } from '../../models/brand';

export interface SubscriptionWithBrand {
  subscription: Subscription;
  brand: Brand;
}
