import { NgModule } from '@angular/core';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
const MaterialComponents = [
  MatFormFieldModule,
  MatIconModule,
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
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
