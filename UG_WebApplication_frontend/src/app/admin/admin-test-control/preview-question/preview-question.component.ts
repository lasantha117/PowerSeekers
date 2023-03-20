import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-preview-question',
  templateUrl: './preview-question.component.html',
  styleUrls: ['./preview-question.component.css']
})


export class PreviewQuestionComponent implements OnInit {

  question: any;
  q_id: any;

  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    this.http.get('http://localhost:8080/getQuestionAdmin').subscribe(
      (resp) => {
        console.log(resp);
        this.question = resp;
      },

      (err) => {
        console.log(err);
      }
    )
  }





  private deleteUrl = 'http://localhost:8080/deleteQuestion';

  deleteQuestion(q_id: any) {
    const deleteParams = {
      q_id: q_id
    };
    this.http.delete(this.deleteUrl, { params: deleteParams }).subscribe(
      (resp) => {
        console.log(resp);
        // remove the deleted question from the questions array
        this.question = this.question.filter((question: any) => question.q_id !== q_id);
      },
      (err) => {
        console.log(err);
      }
    );
  }




}




