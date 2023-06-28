import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent {
  email: any;
  password: any;
  message: any; // Define the 'message' property as a string type
  university:any;
  degree:any;
  confirmPassword:any;
  dob:any;
  name:any;
  isSymbolRotated = false;
  isLoading: boolean = true;

  constructor(private router: Router, private http: HttpClient, private snackBar: MatSnackBar) {}





  register() {
    const loginUrl = 'http://localhost:8080/api/v1/auth/UGregister';

    const loginData = {
      email: this.email,
      password: this.password,
      name: this.name,
      dob: this.dob,
      university: this.university,
      degree: this.degree,
    };

    this.http.post(loginUrl, loginData).subscribe(
      (response: any) => {
        this.message = 'Registration successful';
        localStorage.setItem('email', response.email);
        this.router.navigate(['/student-login']);
      },
      (error: any) => {
        console.log(error);

        if (error.status === 409 && error.error.message === 'Email Already Used') {
          this.snackBar.open('Email Already Used', 'Close', { duration: 7000 });
        } else {
          this.snackBar.open('Something went wrong during registration', 'Close', { duration: 7000 });
        }
      }
    );
  }


  GoHome() {
    this.router.navigate(['/home']);
  }
  text = 'Create An Account';
  secondText = 'With Your Information';
  typedText = '';

  ngOnInit() {
    this.typeText();
    this.isLoading = true;

    // Simulate loading delay of 2 seconds
    setTimeout(() => {
      this.isLoading = false; // Set isLoading to false when responses are received
    }, 2000);

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
    }, 100);
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
    }, 100);
  }


}
