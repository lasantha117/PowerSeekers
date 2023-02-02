import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent {

  constructor(private router:Router) {
  }



  GoHome(){
    this.router.navigate(['/home']);
  }
}
