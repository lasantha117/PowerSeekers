import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-thirteenth-question',
  templateUrl: './thirteenth-question.component.html',
  styleUrls: ['./thirteenth-question.component.css']
})
export class ThirteenthQuestionComponent {

  GoFourteenth(){
    this.router.navigate(['/fourteenth-question']);
  }



  constructor(private router: Router,private http: HttpClient) {
  }


}
