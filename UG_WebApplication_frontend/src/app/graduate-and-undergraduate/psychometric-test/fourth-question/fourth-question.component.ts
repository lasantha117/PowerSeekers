import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fourth-question',
  templateUrl: './fourth-question.component.html',
  styleUrls: ['./fourth-question.component.css']
})
export class FourthQuestionComponent {

  GoFifth(){
    this.router.navigate(['/fifth-question']);
  }



  constructor(private router: Router,private http: HttpClient) {
  }


}
