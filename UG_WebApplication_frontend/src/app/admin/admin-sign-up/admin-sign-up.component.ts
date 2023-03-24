import { Component } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent {

  adminName: any;
  password: any;
  emailAddress : any;
  confirmPassword: any;




  onSubmit() {
    const url = 'http://localhost:8080/AdminRegister';
    const data = {
      adminName: this.adminName,
      password: this.password,
      emailAddress :this.emailAddress,
      confirmPassword:this. confirmPassword,

    };


    this.http.post(url, data).subscribe(
      res => {
        console.log(res);
        alert('Registered successfully!');
      },
      err => {
        console.log(err);
        alert('Error ');
      });
  }



  constructor(private router: Router, private http: HttpClient) {}
}



