import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-answers',
  templateUrl: './add-answers.component.html',
  styleUrls: ['./add-answers.component.css']
})
export class AddAnswersComponent {
  answerId: any;
  q_id : any;
  answer : any;
  jobPosition: any;
  score: any;
  showScore = false;


  constructor(private router: Router,private http: HttpClient) {
  }

  AnswerSubmit() {
    const url = 'http://localhost:8080/addAnswers';
    const data = {
      a_id: this.answerId,
      q_id: this.q_id,
      answer:this.answer,
      job_designation: this.jobPosition,
      marks:this.score

    };



    this.http.post(url, data).subscribe(
      res => {
        console.log(res);
        alert('Question saved successfully!');
      },
      err => {
        console.log(err);
        alert('Error saving question.');
      });




    this.http.post('http://localhost:8080/addAnswers', data).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
  onJobPositionChange() {
    if (this.jobPosition) {
      this.showScore = true;
    } else {
      this.showScore = false;
    }
  }


}
