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

const MaterialComponents = [
  MatFormFieldModule,
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatAutocompleteModule,
  ReactiveFormsModule,
  MatProgressBarModule,
  MatSelectModule,
  MatGridListModule
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