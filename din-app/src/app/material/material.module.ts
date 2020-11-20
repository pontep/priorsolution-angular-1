import { NgModule } from '@angular/core';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { DomSanitizer } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const MaterialComponents = [
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatAutocompleteModule,
  ReactiveFormsModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatGridListModule,

]
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
 }