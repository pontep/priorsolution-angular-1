import { NgModule } from '@angular/core';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import {MatToolbarModule} from '@angular/material/toolbar';

const MaterialComponents = [
  MatFormFieldModule,
  MatIconModule,
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule
]
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
