import { Pipe, PipeTransform } from '@angular/core';
import { SubscriptionPaymentFrequency } from '../../models/subscription-payment-frequency.enum';

@Pipe({
  name: 'paymentFrequency'
})
export class PaymentFrequencyPipe implements PipeTransform {

  transform(frequency: SubscriptionPaymentFrequency, ...args: any[]): string {
    switch (frequency) {
      case SubscriptionPaymentFrequency.DAILY:
        return 'day';
      case SubscriptionPaymentFrequency.WEEKLY:
        return 'week';
      case SubscriptionPaymentFrequency.MONTHLY:
        return 'month';
      case SubscriptionPaymentFrequency.YEARLY:
        return 'year';
    }
  }

}
