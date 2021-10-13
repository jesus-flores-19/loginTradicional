import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router, public service: AuthService){}

  canActivate():  boolean{
    if(this.service.existsToken()){
      return true;
    }else{
      this.router.navigate(["login"]);
      return false
    }
  }
  
}
