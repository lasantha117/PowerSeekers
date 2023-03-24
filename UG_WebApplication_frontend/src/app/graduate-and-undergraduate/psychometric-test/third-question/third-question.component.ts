import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.css']
})
export class ThirdQuestionComponent {

  GoFourth(){
    this.router.navigate(['/fourth-question']);
  }



  constructor(private router: Router,private http: HttpClient) {
  }


}
