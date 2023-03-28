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

  ngOnInit() {
    this.http.get('http://localhost:8080/getQuestionForUser').subscribe((questionData: any) => {
      this.question = questionData;

      this.http.get('http://localhost:8080/getAnswers').subscribe((answersData: any) => {
        this.answers = answersData.filter((answer: any) => answer.q_id === this.question.q_id);
      });
    });
  }


  onSubmit() {
    const data = {

      a_id: this.selectedAnswer
    };

    this.http.post('http://localhost:8080/saveAnswer', data).subscribe(() => {
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













