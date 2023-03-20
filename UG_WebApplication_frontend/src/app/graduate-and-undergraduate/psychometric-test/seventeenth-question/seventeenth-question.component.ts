import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-seventeenth-question',
  templateUrl: './seventeenth-question.component.html',
  styleUrls: ['./seventeenth-question.component.css']
})
export class SeventeenthQuestionComponent {



  GoEighteenth(){
    this.router.navigate(['/eighteenth-question']);
  }

  constructor(private router: Router,private http: HttpClient) {
  }


}
