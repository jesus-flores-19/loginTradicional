import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from "@angular/router"
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { 
    this.user = new usuarioModel();
  }

  user: usuarioModel;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.invalid){return}
    console.log(this.user);

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Cargando"
    })
    Swal.showLoading();

    this.auth.login(this.user).subscribe(
      (data: any) => {
        console.log(data);
        Swal.close();
        this.router.navigate(["home"])
      },(err: any) => {
        Swal.fire({
          title: "Error al autenticar",
          text: err.error.error.message,
          icon: "error",
          confirmButtonText: "Ok",
        })
        console.error(err.error.error.message);
      }
    )
    
  }

}
