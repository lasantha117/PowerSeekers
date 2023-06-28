import { Component } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent {

  name: any;
  password: any;
  email : any;
  confirmPassword: any;




  onSubmit() {
    const url = 'http://localhost:8080/api/v1/auth/AdminNSRegister';
    const data = {
      name: this.name,
      password: this.password,
      email :this.email,
      confirmPassword:this. confirmPassword,

    };


    this.http.post(url, data).subscribe(
      res => {
        console.log(res);
        alert('Registered successfully!');
        this.router.navigate(['/admin-login']); // Navigate to /admin-login after successful registration

      },
      err => {
        this.http.post(url, data).subscribe(
          res => {
            console.log(res);
            this.snackBar.open('Answer Added Successfully', 'Close', {duration: 7000});
          },
          err => {
            console.log(err);
            this.snackBar.open('Something went wrong', 'Close', {duration: 7000});
          }
        );
      }
    )
  }


  Login(){
    this.router.navigate(['/admin-login'])
  }
  constructor(private router: Router, private http: HttpClient ,   private snackBar: MatSnackBar) {}



  text = 'Create an Account';
  secondText = 'Admin';
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
    }, 250);
  }










}



