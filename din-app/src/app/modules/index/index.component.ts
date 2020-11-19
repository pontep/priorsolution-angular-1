import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean

  constructor(private snackBar: MatSnackBar) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      rememberMe: new FormControl('')
    });
  }
  login() {
    // console.log(this.email.value, this.password.value);
    // Simple message.
    this.loading = true
    setTimeout(() => {
      let snackBarRef = this.snackBar.open(`Welcome ${this.email.value}${this.rememberMe.value ? ', I remember you :)': ''}`, 'Ok',{
        duration: 5000
      });
      this.loading = false
    }, 1000)
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get rememberMe() {
    return this.loginForm.get('rememberMe')
  }
}
