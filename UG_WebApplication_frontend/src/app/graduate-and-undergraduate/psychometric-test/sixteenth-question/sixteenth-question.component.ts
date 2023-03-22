import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sixteenth-question',
  templateUrl: './sixteenth-question.component.html',
  styleUrls: ['./sixteenth-question.component.css']
})
export class SixteenthQuestionComponent {


  GoSeventeenth(){
    this.router.navigate(['/seventeenth-question']);
  }

  constructor(private router: Router,private http: HttpClient) {
  }


}
