import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RemoveHostDirective } from './directives/remove-host.directive';
import { PaymentFrequencyPipe } from './pipes/payment-frequency.pipe';

@NgModule({
  declarations: [RemoveHostDirective, PaymentFrequencyPipe],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    RemoveHostDirective,
    PaymentFrequencyPipe
  ]
})
export class SharedModule {}
