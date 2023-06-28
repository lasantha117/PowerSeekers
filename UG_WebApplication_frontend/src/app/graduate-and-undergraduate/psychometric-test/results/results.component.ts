import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  isButtonDisabled2 = false;
  isButtonDisabled = false;
  jobTitles: string[] = [];
  email: any;
  isLoading: boolean = true;



  constructor(private http: HttpClient) {
    this.email = localStorage.getItem('email');
  }




  getTopThreeJobTitles(): void {
    const apiUrl = 'http://localhost:8080/api/v1/auth/top-three';

    // Create an HttpParams object and set the 'email' parameter
    const params = new HttpParams().set('email', this.email);

    // Pass the 'params' object as the second argument in the request
    this.http.get<string[]>(apiUrl, { params }).subscribe(
      jobTitles => {
        this.jobTitles = jobTitles;
      },
      error => {
        console.log('Error retrieving job titles:', error);
      }
    );
    this.isButtonDisabled2 = true;
  }



  text = 'Click The Button';
  secondText = 'View Your Results';
  typedText = '';

  ngOnInit() {
    this.isLoading = true; // Set isLoading to true before making API requests
    this.typeText();
    this.isLoading = false;
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
    }, 100);
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
    }, 100);
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
    }, 50);
  }



}

