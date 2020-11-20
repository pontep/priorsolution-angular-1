import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  loading: boolean
  exampleValidateForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.exampleValidateForm = new FormGroup({
      month: new FormControl('',[
        Validators.required,
        Validators.min(1),
        Validators.max(11)
      ])
    })
  }
  onSubmit(){
    this.loading = true
    setTimeout(()=>{
      alert(`Month input is ${this.month.value}`)
      this.loading = false
    }, 500)
    
  }
  
  get month(){
    return this.exampleValidateForm.get('month')
  }


}
