import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: usuarioModel;


  constructor(public auth: AuthService) { 
    this.user = new usuarioModel();
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.invalid){return}
    console.log(this.user);
    this.auth.nuevoUsuario(this.user).subscribe(
      (data: any) => {
        console.log(data);
      },(err: any) => {
        console.log(err.error.error.message);
      }
    )
  }

}
