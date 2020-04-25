import {  Detail } from './../detail.model';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private postsSub: Subscription;
details: any = [];
  constructor(private authService: AuthService) { }

  ngOnInit() {
  this.postsSub = this.authService.getAllData().subscribe(data => {


this.details = data;



});
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.postsSub.unsubscribe();
    }

}
