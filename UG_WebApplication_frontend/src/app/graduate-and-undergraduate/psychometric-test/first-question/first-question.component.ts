import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

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
  answerSelected: any = false;
  isLoading: boolean = true;


  ngOnInit() {
    this.isLoading = true; // Set isLoading to true before making API requests

    this.http.get('http://localhost:8080/api/v1/auth/getQuestionForUser').subscribe((questionData: any) => {
      this.question = questionData;

      this.http.get('http://localhost:8080/api/v1/auth/getAnswers').subscribe((answersData: any) => {
        this.answers = answersData.filter((answer: any) => answer.q_id === this.question.q_id);

        this.isLoading = false; // Set isLoading to false when responses are received
      });
    });
  }


  onSubmit() {
    const data = {
      a_id: this.selectedAnswer,
      email: localStorage.getItem('email') // Get the stored email from local storage
    };

    this.http.post('http://localhost:8080/api/v1/auth/saveAnswer', data).subscribe(() => {
      // alert('Answer saved successfully!');
    });

    this.router.navigate(['/second-question']);
  }


  popupOpen = false;

  constructor(private router: Router, private http: HttpClient) {}

  calculateAndSaveMarks() {
    return this.http.post("http://localhost:8080/api/v1/auth/calculate-marks", null);
  }
}
