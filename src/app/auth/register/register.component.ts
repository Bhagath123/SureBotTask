import { Routes, Router } from '@angular/router';
import { AuthService } from './../auth.service';


import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {


  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return alert('form is invalid please enter correct values');
    }
    this.authService.registerPost(form.value.email, form.value.name, form.value.section, form.value.password);
    this.router.navigate(['/login']);
    form.resetForm();

  }




}

