import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tenth-qustion',
  templateUrl: './tenth-qustion.component.html',
  styleUrls: ['./tenth-qustion.component.css']
})
export class TenthQustionComponent {


  GoEleventh(){
    this.router.navigate(['/eleventh-question']);
  }


  constructor(private router: Router,private http: HttpClient) {
  }


}
