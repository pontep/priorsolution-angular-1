import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-r64',
  templateUrl: './r64.component.html',
  styleUrls: ['./r64.component.css']
})
export class R64Component implements OnInit {

  userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            carAmount:['',], 
            premiumAmount:['', RxwebValidators.greaterThan({fieldName:'carAmount' })], 
        });
    }

}
