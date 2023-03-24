import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fourteenth-question',
  templateUrl: './fourteenth-question.component.html',
  styleUrls: ['./fourteenth-question.component.css']
})
export class FourteenthQuestionComponent {

  GoFifteenth(){
    this.router.navigate(['/fifteenth-question']);
  }


  constructor(private router: Router,private http: HttpClient) {
  }


}
