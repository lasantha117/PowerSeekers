import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fifth-question',
  templateUrl: './fifth-question.component.html',
  styleUrls: ['./fifth-question.component.css']
})
export class FifthQuestionComponent {

  GoSixth(){
    this.router.navigate(['/sixth-question']);
  }



  constructor(private router: Router,private http: HttpClient) {
  }


}
