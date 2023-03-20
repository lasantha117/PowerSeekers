import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-twentieth-question',
  templateUrl: './twentieth-question.component.html',
  styleUrls: ['./twentieth-question.component.css']
})
export class TwentiethQuestionComponent {

  GoResults(){
    this.router.navigate(['/results-question']);
  }



  constructor(private router: Router,private http: HttpClient) {
  }


}
