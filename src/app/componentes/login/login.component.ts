import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
    this.user = new usuarioModel();
  }

  user: usuarioModel;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.invalid){return}
    console.log(this.user);
    
    
  }

}
