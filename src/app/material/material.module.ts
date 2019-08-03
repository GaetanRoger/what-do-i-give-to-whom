import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatSelectModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatSelectModule,
  MatAutocompleteModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES
  ],
  exports: MATERIAL_MODULES
})
export class MaterialModule {}
