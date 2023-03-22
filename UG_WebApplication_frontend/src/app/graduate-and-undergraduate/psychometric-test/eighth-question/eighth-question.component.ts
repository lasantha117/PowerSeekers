import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-eighth-question',
  templateUrl: './eighth-question.component.html',
  styleUrls: ['./eighth-question.component.css']
})
export class EighthQuestionComponent {


  GoNinth(){
    this.router.navigate(['/ninth-question']);
  }






  constructor(private router: Router,private http: HttpClient) {
  }

}
