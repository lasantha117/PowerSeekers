import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {

  isSymbolRotated = false;
  isLoading: boolean = true;


  email: any;
  password: any;
  message: any; // Define the 'message' property as a string type

  constructor(private router: Router, private http: HttpClient, private snackBar: MatSnackBar) {}


  ngOnInit() {
    this.isLoading = true;

    // Simulate loading delay of 2 seconds
    setTimeout(() => {
      this.isLoading = false; // Set isLoading to false when responses are received
    }, 2000);
  }




  login() {
    const loginUrl = 'http://localhost:8080/api/v1/auth/UGlogin'; // Replace with your Spring Boot login URL

    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post(loginUrl, loginData).subscribe(
      (response: any) => {
        this.message = 'Login successful';
        localStorage.setItem('email', response.email);
        this.router.navigate(['/psychometric-test']);
      },
      (error: any) => {
        console.log(error);

        this.snackBar.open('Something went wrong during login', 'Close', { duration: 7000 });
      }
    );
  }

  GoHome() {
    this.router.navigate(['/home']);
  }

  signup(){
    this.router.navigate(['/student-signup'])
  }
}
