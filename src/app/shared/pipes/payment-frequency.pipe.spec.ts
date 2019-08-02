import { PaymentFrequencyPipe } from './payment-frequency.pipe';

describe('PaymentFrequencyPipe', () => {
  it('create an instance', () => {
    const pipe = new PaymentFrequencyPipe();
    expect(pipe).toBeTruthy();
  });
});
