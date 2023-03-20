import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-eleventh-question',
  templateUrl: './eleventh-question.component.html',
  styleUrls: ['./eleventh-question.component.css']
})
export class EleventhQuestionComponent {


  GoTwelfth(){
    this.router.navigate(['/twelfth-question']);
  }




  constructor(private router: Router,private http: HttpClient) {
  }


}
