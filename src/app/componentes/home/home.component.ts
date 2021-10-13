import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.logout();
    this.router.navigate(["login"])
  }

}
