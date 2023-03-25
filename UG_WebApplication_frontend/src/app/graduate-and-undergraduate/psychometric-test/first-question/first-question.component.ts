import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuestionService} from "../../../question.service";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.css']
})
export class FirstQuestionComponent implements OnInit {


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


  constructor(private http: HttpClient) { }

}
