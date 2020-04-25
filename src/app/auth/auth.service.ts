import {  Detail } from './../detail.model';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  details: Detail[] = [];
  private DetailsUpdate = new Subject<Detail[]>();
  isLoggedIn = 'false';
  constructor(private http: HttpClient, private router: Router) { }
registerPost(email: string, name: string, imageUrl: string, password: string) {
  const details = {email, name, imageUrl, password};
  // tslint:disable-next-line: no-shadowed-variable
  this.http.post<{error:string}>('http://localhost:3000/api/posts/register', details ).subscribe(details => {
    if(details.error){
      window.alert('you already registered with this email please login');
    }


  });
}
loginPost(email: string, password: string) {
  const loginDetails = {email, password};
  this.http.post<{data, details: Detail[]}>('http://localhost:3000/api/posts/login', loginDetails).subscribe(data => {


if (data.data === 'true') {
  this.isLoggedIn = 'true';
  this.router.navigate(['/home']);
}
// tslint:disable-next-line: one-line
else{
  alert ('Details are wrong please enter the correct details');
}


  });

}
getDetails(email) {
 // tslint:disable-next-line: no-unused-expression
 return this.http.get < Detail[] > ('http://localhost:3000/api/posts/login' + '/' + email ).subscribe(data => {

  this.details = data;
  this.DetailsUpdate.next([...this.details]);
});
  }
  getAllData() {
    return this.DetailsUpdate.asObservable();
    }
loggedIn() {
  return this.isLoggedIn;
}
}
