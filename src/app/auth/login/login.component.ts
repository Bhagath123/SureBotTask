import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
  this.authService.loginPost(form.value.email, form.value.password);
  this.authService.getDetails(form.value.email);
  form.resetForm();
  }
}
