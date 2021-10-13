import { Injectable } from '@angular/core';
import { usuarioModel } from '../models/usuario.model';
import { HttpClient} from '@angular/common/http'
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) {
    this.leetToken();
   }
  
  api_key: string="AIzaSyApDJu24Kld9mIj4GEmWD5zTa77Rm7qVgM";
  url_api: string = "https://identitytoolkit.googleapis.com/v1/accounts:";
  idToken: any;

  login(usuario: usuarioModel){

    const data = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    return this.http.post(`${this.url_api}signInWithPassword?key=${this.api_key}`, data)
            .pipe( map(
              (data: any) => {
                this.guardarToken(data.idToken);
                return data;
              }
            ))
    
  }

  logout(){
    localStorage.removeItem("token")
  }

  nuevoUsuario(usuario: usuarioModel){
    const data = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    return this.http.post(`${this.url_api}signUp?key=${this.api_key}`, data)
            .pipe( map(
              (data: any) => {
                this.guardarToken(data.idToken);
                return data;
              }
            ))
  }

  private guardarToken(token: string){
    this.idToken = token;
    localStorage.setItem("token", token);
  }
  
  leetToken(){
    if(localStorage.getItem("token")){
      this.idToken = localStorage.getItem("token")
    }else{
      this.idToken =""
    }
    return this.idToken;
  }
  
  existsToken(){
    return this.idToken.length > 2;
  }

}
