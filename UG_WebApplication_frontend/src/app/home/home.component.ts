import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private router:Router) {
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
