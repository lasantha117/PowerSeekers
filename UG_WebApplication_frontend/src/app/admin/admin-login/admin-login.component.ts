import {Component, NgModule} from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { Observable } from 'rxjs';


interface AuthenticationResponse {
  token: string;
}

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent {


  email: any;
  password: any;
  error: string = '';

  constructor(private router: Router, private http: HttpClient,) { }

  authenticate(): void {
    const url = 'http://localhost:8080/api/v1/auth/AdminNSlogin';
    const credentials = { email: this.email, password: this.password };

    this.http.post(url, credentials).subscribe(
      (response: any) => {
        // Save JWT token and last login time and date in localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('lastLogin', new Date().toLocaleString());
        localStorage.setItem('email', response.email);

        // Redirect to admin dashboard
        this.router.navigate(['/admin-dashboard']);
      },
      (error: any) => { // Handle the error response
        if (error.error && error.error.message) {
          this.error = error.error.message; // Set the error message to display
        } else {
          this.error = 'Please enter correct username and password'; // Fallback error message
        }
      }
    );
  }





  // Method to get the JWT token from localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Method to attach JWT token to HTTP headers
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      return new HttpHeaders();
    }
  }

  // Example method to get data from an API endpoint that requires authentication
  getData(): Observable<any> {
    const url = 'http://localhost:8080/api/v1/data';
    const headers = this.getAuthHeaders();
    return this.http.get(url, { headers });
  }

  // Example method to log out and remove the JWT token from localStorage

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/login']);
  }


  isLoggedIn(): boolean {
    const accessToken = localStorage.getItem('access_token');
    return accessToken !== null;
  }

  SignUp(){
    this.router.navigate(['/admin-sign-up'])
  }


  text = 'Welcome Back';
  secondText = ' Admin';
  typedText = '';

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < this.text.length + 2) {
        this.typedText += this.text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        this.eraseText();
      }
    }, 200);
  }

  eraseText() {
    let i = this.text.length - 1;
    const erasingInterval = setInterval(() => {
      if (i >= 0 ) {
        this.typedText = this.typedText.slice(0, -1);
        i--;
      } else {
        clearInterval(erasingInterval);
        this.typeSecondText();
      }
    }, 50);
  }

  typeSecondText() {
    let j = 0;
    const typingInterval = setInterval(() => {
      if (j < this.secondText.length) {
        this.typedText += this.secondText.charAt(j);
        j++;
      } else {
        clearInterval(typingInterval);
        this.eraseSecondText();
      }
    }, 200);
  }

  eraseSecondText() {
    let i = this.secondText.length - 1;
    const erasingInterval = setInterval(() => {
      if (i >= 0 ) {
        this.typedText = this.typedText.slice(0, -1);
        i--;
      } else {
        clearInterval(erasingInterval);
        this.typeText();
      }
    }, 230);
  }





  forgotPassword(): void {
    this.router.navigate(['/forgot-password'])
  }














}
