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

  userQuestions:any;

  ngOnInit() {
    this.http.get('http://localhost:8080/UserQuestion').subscribe((data) => {
      console.log(data); // You can check the data in the browser console
      // Assign the data to a variable to display it in the template
      this.userQuestions = data;
    });
  }



  constructor(private http: HttpClient) { }

}
