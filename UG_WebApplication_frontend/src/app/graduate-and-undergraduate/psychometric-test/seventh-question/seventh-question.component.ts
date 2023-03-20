import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-seventh-question',
  templateUrl: './seventh-question.component.html',
  styleUrls: ['./seventh-question.component.css']
})
export class SeventhQuestionComponent {

  GoEighth(){
    this.router.navigate(['/eighth-question']);
  }


  constructor(private router: Router,private http: HttpClient) {
  }


}
