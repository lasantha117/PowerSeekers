import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuestionService} from "../../../question.service";

class question {
}

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.css']
})
export class FirstQuestionComponent implements OnInit {

  questions: any;
  answers: any;
  questionList: any;
  filteredQuestionList: any;


  apiURL = 'http://localhost:8080/questions/random';



  getRandomQuestionAndAnswers() {
    return this.http.get('http://localhost:8080/UserQuestion');
  }




  ngOnInit() {

    this.http.get('http://localhost:8080/UserQuestion').subscribe(
      (resp) => {
        console.log(resp);
        this.questions = resp;
        this.answers = resp;
      },

      (err) => {
        console.log(err);
      }
    )
  }


    constructor(private http: HttpClient ) { }
}
