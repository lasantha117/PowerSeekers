import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: any;

  constructor(private http: HttpClient) {}

  forgotPassword(): void {
    const email = this.email; // Retrieve the email from the input field or wherever it is stored
    const url = 'http://localhost:8080/api/v1/auth/forgotPassword';
    const params = new HttpParams().set('email', email);

    this.http.post(url, null, { params }).subscribe(
      () => {
        // Password reset successful
        alert('Password reset successful. Check your email for the new password.');
      },
      (error: any) => {
        // Handle error
        alert('Password reset failed. ' + error.error);
      }
    );
  }




  text = 'The new password';
  secondText = ' Will be sent to your E-mail';
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




















}
