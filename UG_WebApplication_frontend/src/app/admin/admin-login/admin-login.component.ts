import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private router:Router) {
  }
  adminId: any;
  adminName: any;
  emailAddress: any;





  GoHome(){
    this.router.navigate(['/home']);
  }


}
