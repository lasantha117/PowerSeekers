import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-preview-answers',
  templateUrl: './preview-answers.component.html',
  styleUrls: ['./preview-answers.component.css']
})
export class PreviewAnswersComponent implements OnInit {
  answer: any;
  a_id: any;
  q_id:any;

  question: any;
  editingAnswer: any;
  deleteConfirmation: boolean = false;
  constructor(private http: HttpClient, private router:Router) {
  }


  ngOnInit() {
    this.getAnswers();
  }

  getAnswers() {

    this.http.get('http://localhost:8080/api/v1/auth/getAnswers').subscribe(
      (resp) => {
        console.log(resp);
        this.answer = resp;
      },

      (err) => {
        console.log(err);
      }
    )





  }



  private deleteUrl = 'http://localhost:8080/api/v1/auth/deleteAnswers';


  deleteAnswers() {
    const deleteParams = {
      a_id: this.a_id
    };

    this.http.delete(this.deleteUrl, { params: deleteParams }).subscribe(
      (resp) => {
        console.log(resp);
        // Remove the deleted answer from the answer array
        this.answer = this.answer.filter((answer: any) => answer.a_id !== this.a_id);
        this.deleteConfirmation = false; // Reset delete confirmation flag
      },
      (err) => {
        console.log(err);
      }
    );
  }


  private updateUrl = 'http://localhost:8080/api/v1/auth/UpdateAnswers';

  updateAnswer() {
    const url = `${this.updateUrl}/${this.editingAnswer.a_id}`;

    this.http.put(url, this.editingAnswer).subscribe(
      (resp) => {
        console.log(resp);
        this.editingAnswer = null;
        this.editingAnswer();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editAnswer(answer: any) {
    this.editingAnswer = {...answer};
  }

  cancelEdit() {
    this.editingAnswer = null;
  }

  deleteAnswer(a_id: any) {
    this.a_id = a_id;
    this.deleteConfirmation = true;
  }

}
