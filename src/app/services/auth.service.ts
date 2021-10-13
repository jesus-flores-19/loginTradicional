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
    let hoy = new Date();
    hoy.setSeconds(3600)
    return this.http.post(`${this.url_api}signInWithPassword?key=${this.api_key}`, data)
            .pipe( map(
              (data: any) => {
                this.guardarToken(data.idToken);
                localStorage.setItem("expira", hoy.getTime().toString())
                return data;
              }
            ))
    
  }

  logout(){
    localStorage.removeItem("token")
    this.idToken=""
    localStorage.removeItem("expira")
  }

  nuevoUsuario(usuario: usuarioModel){
    const data = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    let hoy = new Date();
    hoy.setSeconds(3600)
    return this.http.post(`${this.url_api}signUp?key=${this.api_key}`, data)
            .pipe( map(
              (data: any) => {
                this.guardarToken(data.idToken);
                localStorage.setItem("expira", hoy.getTime().toString())
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
    if(this.idToken.length < 2){
      return false;
    }
    const expira = Number(localStorage.getItem("expira"))
    const expiraDate = new Date();
    expiraDate.setTime(expira);
    if( expiraDate > new Date()){
      return true
    }else{
      console.log("El token ya expiro");
      return false
    }
  }

}
