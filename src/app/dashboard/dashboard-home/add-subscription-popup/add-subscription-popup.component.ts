import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubscriptionPaymentFrequency } from '../../../models/subscription-payment-frequency.enum';
import { isNumber } from 'util';
import { BrandsService } from '../../../shared/services/brands/brands.service';
import { combineLatest, Observable } from 'rxjs';
import { Brand } from '../../../models/brand';
import { map } from 'rxjs/operators';
import { Subscription } from '../../../models/subscription';
import { MatDialogRef } from '@angular/material';

/**
 * Popup used to add a new subscription.
 *
 * On close, it will return a {@link Subscription} object
 * containing all the info about the new subscription. It
 * will not perform any query to the backend to add it to DB:
 * it is only used to gather information from the user.
 */
@Component({
  selector: 'wgw-add-subscription-popup',
  templateUrl: './add-subscription-popup.component.html',
  styleUrls: ['./add-subscription-popup.component.scss']
})
export class AddSubscriptionPopupComponent implements OnInit {
  /**
   * Reactive form object containing all values
   * from the new subscription form.
   */
  subscriptionForm: FormGroup;

  /**
   * Brands queried from the backend and filtered
   * using the brand input field value.
   */
  brands$: Observable<Brand[]>;

  /**
   * @param fb Form builder.
   * @param brandsService Brand service.
   */
  constructor(private readonly fb: FormBuilder,
              private readonly brandsService: BrandsService,
              private readonly dialogRef: MatDialogRef<AddSubscriptionPopupComponent>) { }

  /**
   * Returns the available values for payment frequencies.
   */
  get paymentFrequencies(): string[] {
    return Object.values(SubscriptionPaymentFrequency)
      .filter(v => !isNumber(v));
  }

  /**
   * Returns the brand field control.
   */
  get brandControl(): FormControl {
    return this.subscriptionForm.get('brand') as FormControl;
  }

  ngOnInit() {
    this.subscriptionForm = this.createSubscriptionForm();
    this.brands$ = this.getAndFilterBrands();
  }

  /**
   * Returns the string to be used to display the value
   * of the brand.
   *
   * @param brand Brand to be displayed.
   */
  displayBrandName(brand?: Brand): string | undefined {
    return brand ? brand.name : undefined;
  }

  /**
   * Closes the dialog and returns the new subscription object.
   */
  sendResult() {
    const formValue = this.subscriptionForm.value;

    const newSubscription: Subscription = {
      source: typeof formValue.brand === 'string' ? formValue.brand : undefined,
      brand: typeof formValue.brand === 'string' ? undefined : formValue.brand,
      paymentFrequency: formValue.paymentFrequency,
      amount: formValue.amount
    };

    this.dialogRef.close(newSubscription);
  }

  /**
   * Retrieve the brands from the service and then filter
   * them using the using the brand input field value.
   */
  private getAndFilterBrands(): Observable<Brand[]> {
    return combineLatest(
      this.brandsService.getAll(),
      this.brandControl.valueChanges
    ).pipe(
      map(([brands, field]) => [brands, typeof field === 'string' ? field : field.name]),
      map(([brands, field]) => brands.filter(this.brandFilter(field))
      )
    );
  }

  /**
   * Creates the subscription reactive form.
   */
  private createSubscriptionForm(): FormGroup {
    return this.fb.group({
      brand: [null, Validators.required],
      amount: [null, [Validators.required, Validators.min(0.1)]],
      paymentFrequency: [SubscriptionPaymentFrequency.MONTHLY.toString(), Validators.required]
    });
  }

  /**
   * Filters a brand.
   *
   * @param filter filter to use.
   */
  private brandFilter(filter: string): (Brand) => boolean {
    return (brand: Brand): boolean => {
      const cleanFilter = filter.toLowerCase().trim();
      const cleanBrandName = brand.name.toLowerCase().trim();

      return cleanBrandName.includes(cleanFilter);
    };
  }

  brandSymbol(brand: Brand) {
    return `/assets/brands/${brand.images.logo}`;
  }
}
