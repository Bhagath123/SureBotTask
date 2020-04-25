import { HomeComponent } from './home/home.component';



import { RegisterComponent } from './auth/register/register.component';

import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [ {path: '' , redirectTo: '/login', pathMatch: 'full'},
          {path: 'login' , component : LoginComponent  },
          {path: 'register' , component : RegisterComponent },
          {path: 'home' , component : HomeComponent , canActivate: [AuthGuard] }

      ];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {
}
