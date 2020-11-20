import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})

export class ExampleComponent implements OnInit {
  loading: boolean;
  exampleValidateForm: FormGroup;

  constructor(private formBuild: FormBuilder) {}

  ngOnInit(): void {
    this.exampleValidateForm = this.formBuild.group({
      compareType: new FormControl('', [Validators.required]),
      value1: new FormControl(''),
      value2: new FormControl('')
    });
  }
  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      alert(`Month input is ${this.exampleValidateForm.status}`);
      this.loading = false;
    }, 500);
  }

  handleCompare() {
    this.exampleValidateForm.clearValidators();
    switch (this.compareType.value) {
      case 'Greater than':
        this.exampleValidateForm.get('value1').setValidators([
          RxwebValidators.greaterThan({
            fieldName: 'value2',
          }),
        ]);
        this.exampleValidateForm.get('value2').setValidators([
          RxwebValidators.lessThan({
            fieldName: 'value1',
          }),
        ]);
        break;
      case 'Less than':
        this.exampleValidateForm.get('value1').setValidators([
          RxwebValidators.lessThan({
            fieldName: 'value2',
          }),
        ]);
        this.exampleValidateForm.get('value2').setValidators([
          RxwebValidators.greaterThan({
            fieldName: 'value1',
          }),
        ]);
        break;
      case 'Equal':
        this.exampleValidateForm.get('value1').setValidators([
          RxwebValidators.lessThanEqualTo({
            fieldName: 'value2',
          }),
          RxwebValidators.greaterThanEqualTo({
            fieldName: 'value2',
          }),
        ]);
        this.exampleValidateForm.get('value2').setValidators([
          RxwebValidators.lessThanEqualTo({
            fieldName: 'value1',
          }),
          RxwebValidators.greaterThanEqualTo({
            fieldName: 'value1',
          }),
        ]);
        break;
      default:
        console.log('Default case');
        break;
    }
  }

  get value1() {
    return this.exampleValidateForm.get('value1');
  }
  get value2() {
    return this.exampleValidateForm.get('value2');
  }
  get compareType() {
    return this.exampleValidateForm.get('compareType');
  }
}
