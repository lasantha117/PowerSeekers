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
  selectedAnswer:any;
  answerSelected:any = false;
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


    this.router.navigate(['third-question']);

  }


  popupOpen = false;

  openPopup() {
    this.popupOpen = true;
    document.body.classList.add('no-scroll');
  }

  closePopup() {
    this.popupOpen = false;
    document.body.classList.remove('no-scroll');
  }

  goDashboard() {
    // add your function to navigate to the dashboard here
  }






  constructor(private http: HttpClient, private router: Router) {
  }




}













