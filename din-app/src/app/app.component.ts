import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { Subscription } from 'rxjs';
import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  currentUser: User
  
  title = 'dinny weather'
  mediaSub: Subscription
  deviceXs: boolean

  constructor(public mediaObserver: MediaObserver, private authenticationService: AuthenticationService){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    ReactiveFormConfig.set({"validationMessage":{"greaterThan":"Input should be greater than pre defined field"}});
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs' ? true : false
    })  
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe()
  }
  
}
