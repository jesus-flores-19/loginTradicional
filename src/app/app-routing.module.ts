import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "login", component:LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "", pathMatch:"full", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
