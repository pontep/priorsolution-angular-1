import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

const MyAwesomeRangeValidator: ValidatorFn = (fg: FormGroup) => {
  const start = fg.get('rangeStart').value;
  const end = fg.get('rangeEnd').value;
  return start !== null && end !== null && start < end ? null : { range: true };
};

const DinGreaterThanValidator: ValidatorFn = (fg: FormGroup) => {
  const a = fg.get('value1').value;
  const b = fg.get('value2').value;
  return a > b && a !== null && b !== null ? null : { greaterThan: true };
};
const DinLessThanValidator: ValidatorFn = (fg: FormGroup) => {
  const a = fg.get('value1').value;
  const b = fg.get('value2').value;
  return a < b && a !== null && b !== null ? null : { lessThan: true };
};
const EqualsValidator: ValidatorFn = (fg: FormGroup) => {
  const a = fg.get('value1').value;
  const b = fg.get('value2').value;
  return a == b && a !== null && b !== null ? null : { equal: true };
}

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements OnInit {
  form: FormGroup;
  loading: boolean;
  exampleValidateForm: FormGroup;

  constructor(private formBuild: FormBuilder) {
    this.form = this.formBuild.group(
      {
        rangeStart: [null, Validators.required],
        rangeEnd: [null, Validators.required],
      },
      { validator: MyAwesomeRangeValidator }
    );
    this.exampleValidateForm = this.formBuild.group({
      compareType: [null, Validators.required],
      value1:[null, Validators.required],
      value2: [null, Validators.required],
    },{
      // validator: DinGreaterThanValidator,
    } );
  }

  ngOnInit(): void {}
  onSubmit() {
    this.loading = true;
    if (this.exampleValidateForm.valid) {
      setTimeout(() => {
        alert(`Month input is ${this.exampleValidateForm.status}`);
        this.loading = false;
      }, 1);
    } else {
      return;
    }
  }

  handleCompare() {
    this.exampleValidateForm.clearValidators()
    switch (this.compareType.value) {
      case 'Greater than':
        this.exampleValidateForm.setValidators([DinGreaterThanValidator])
        break;
      case 'Less than':
        this.exampleValidateForm.setValidators([DinLessThanValidator])
        break;
      case 'Equal':
        this.exampleValidateForm.setValidators([EqualsValidator])
        console.log('equal');
        break;
      default:
        console.log('Default case');
        break;
    }
    this.exampleValidateForm.updateValueAndValidity()
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
