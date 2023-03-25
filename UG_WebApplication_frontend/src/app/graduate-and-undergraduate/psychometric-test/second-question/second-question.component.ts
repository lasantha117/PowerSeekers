import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.css']
})
export class SecondQuestionComponent  implements OnInit {

  question: any;
  answers: any;
  selectedAnswer: any;



  ngOnInit() {
    this.http.get('http://localhost:8080/getQuestionForUser').subscribe((data) => {
      this.question = data;


      this.http.get('http://localhost:8080/getAnswers').subscribe((data) => {
        if (Array.isArray(data)) {
          this.answers = data.filter(answer => answer.q_id === this.question.q_id);
        }
      });
    });


  }



  constructor(private http: HttpClient, private router: Router) {
  }






}













