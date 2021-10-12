import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: usuarioModel;


  constructor() { 
    this.user = new usuarioModel();
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.invalid){return}
    console.log(this.user);
    
  }

}
