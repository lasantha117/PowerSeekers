import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {

  constructor(private router:Router) {
  }



  GoHome(){
    this.router.navigate(['/home']);
  }

}
