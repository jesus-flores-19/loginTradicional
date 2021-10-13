import { Injectable } from '@angular/core';
import { usuarioModel } from '../models/usuario.model';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }
  
  api_key: string="AIzaSyApDJu24Kld9mIj4GEmWD5zTa77Rm7qVgM";
  url_api: string = "https://identitytoolkit.googleapis.com/v1/accounts:";

  login(usuario: usuarioModel){

    const data = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    return this.http.post(`${this.url_api}signInWithPassword?key=${this.api_key}`, data)
    
  }

  logout(){

  }

  nuevoUsuario(usuario: usuarioModel){
    const data = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    return this.http.post(`${this.url_api}signUp?key=${this.api_key}`, data)
  }

}
