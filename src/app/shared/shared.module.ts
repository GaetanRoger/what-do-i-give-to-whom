import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RemoveHostDirective } from './directives/remove-host.directive';
import { PaymentFrequencyPipe } from './pipes/payment-frequency.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RemoveHostDirective, PaymentFrequencyPipe],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    RemoveHostDirective,
    PaymentFrequencyPipe,
    ReactiveFormsModule,
  ]
})
export class SharedModule {}
