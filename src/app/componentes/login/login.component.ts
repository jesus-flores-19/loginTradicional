import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { 
    this.user = new usuarioModel();
  }

  user: usuarioModel;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.invalid){return}
    console.log(this.user);
    this.auth.login(this.user).subscribe(
      (data: any) => {
        console.log(data);
      },(err: any) => {
        console.log(err.error.error.message);
      }
    )
    
  }

}
