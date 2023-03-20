import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-twelfth-question',
  templateUrl: './twelfth-question.component.html',
  styleUrls: ['./twelfth-question.component.css']
})
export class TwelfthQuestionComponent {

  GoThirteenth(){
    this.router.navigate(['/thirteenth-question']);
  }



  constructor(private router: Router,private http: HttpClient) {
  }


}
