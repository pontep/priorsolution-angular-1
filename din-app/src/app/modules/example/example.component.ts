import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
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

  constructor() {}

  ngOnInit(): void {
    this.exampleValidateForm = new FormGroup({
      value1: new FormControl('', [Validators.required]),
      value2: new FormControl('', [Validators.required]),
      compareType: new FormControl('', [Validators.required]),
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
    switch (this.compareType.value) {
      case 'Greater than':
        console.log('Greater than');
        this.exampleValidateForm.get("value1").setValidators([RxwebValidators])
        break;
      case 'Less than':
        console.log('Less than');
        break;
      case 'Equal':
        console.log('Equal');
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
