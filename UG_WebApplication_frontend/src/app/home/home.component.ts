import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isSymbolRotated = false;
  isLoading: boolean = true;

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.isLoading = true;

    // Simulate loading delay of 2 seconds
    setTimeout(() => {
      this.isLoading = false; // Set isLoading to false when responses are received
    }, 2000);
  }



  rotateSymbol() {
    this.isSymbolRotated = !this.isSymbolRotated;
  }

  GoStudentLogin(){
    this.router.navigate(['/student-login']);
  }

  GoCompanyLogin(){
    this.router.navigate(['/company-login']);
  }

  GoIndex(){
    this.router.navigate(['/index']);
  }
}
