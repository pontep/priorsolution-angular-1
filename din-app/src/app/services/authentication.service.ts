import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(sessionStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public isAuthenticated(){
    if (!this.currentUserValue){
      return false
    }  
    return true
  }
  public login(email: string, password: string): Observable<any>{
    let user = JSON.stringify({
      email: email,
      password: password
    })
    sessionStorage.setItem('currentUser', user)
    return of(true)
  }

}
