import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-psychometric-test',
  templateUrl: './psychometric-test.component.html',
  styleUrls: ['./psychometric-test.component.css']
})
export class PsychometricTestComponent {

  isSymbolRotated = false;
  isLoading: boolean = true;


  constructor(private router:Router) {

  }


  GoFirst(){
    this.router.navigate(['rules']);
  }
  text = 'Welcome';
  secondText = 'To U&G WebApplication';
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


