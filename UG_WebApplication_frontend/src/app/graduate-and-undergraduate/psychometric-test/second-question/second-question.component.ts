import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.css']
})
export class SecondQuestionComponent {


  data: any[] = [];




  question: any;
  answer: any;
  marks: any;
  jobTitle: any;

  userQuestions:any;


  ngOnInit() {
    this.http.get('http://localhost:8080/UserQuestion').subscribe(
      (resp) => {
        console.log(resp);
        this.userQuestions = resp;
      },

      (err) => {
        console.log(err);
      }
    )

  }









  constructor(private http: HttpClient) { }

  }














