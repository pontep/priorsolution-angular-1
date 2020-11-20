import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(public authenticationService: AuthenticationService, protected router: Router) { }

    canActivate() {
        if(!this.authenticationService.currentUserValue){
            this.router.navigate(['/'])
            return false
        }else if(this.router.url === '/'){
            // this.router.navigate(['/home'])
        }
        return true
        // if (!this.authenticationService.) {
        //     this.router.navigate(['/']);
        //     return false;
        // }
        
    }
}