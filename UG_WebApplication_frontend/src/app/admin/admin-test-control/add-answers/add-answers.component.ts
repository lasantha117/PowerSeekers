import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-answers',
  templateUrl: './add-answers.component.html',
  styleUrls: ['./add-answers.component.css']
})
export class AddAnswersComponent {

  q_id: any;
  answer: any;
  formSubmitted: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  AnswerSubmit() {
    this.formSubmitted = true;

    if (!this.q_id || !this.answer) {
      return; // Exit if any field is empty
    }

    const url = 'http://localhost:8080/api/v1/auth/addAnswers';
    const data = {
      q_id: this.q_id,
      answer: this.answer,
    };

    this.http.post(url, data).subscribe(
      res => {
        console.log(res);
        this.snackBar.open('Answer Added Successfully','Close', { duration: 7000 });
      },
      err => {
        console.log(err);
        this.snackBar.open('Something went wrong', 'Close', { duration: 7000 });
      }
    );
  }


  getQid() {
    const url = 'http://localhost:8080/getAnswers';
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    this.http.get(url, { headers }).subscribe(
      resp => {
        console.log(resp);
        this.answer = resp;
      },
      err => {
        console.log(err);
      }
    );
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', { duration: 7000 });
  }

}
