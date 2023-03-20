import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fifteenth-question',
  templateUrl: './fifteenth-question.component.html',
  styleUrls: ['./fifteenth-question.component.css']
})
export class FifteenthQuestionComponent {

  GoSixteenth(){
    this.router.navigate(['/sixteenth-question']);
  }




  constructor(private router: Router,private http: HttpClient) {
  }


}
