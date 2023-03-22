import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-preview-answers',
  templateUrl: './preview-answers.component.html',
  styleUrls: ['./preview-answers.component.css']
})
export class PreviewAnswersComponent implements OnInit {
  answer: any;
  a_id: any;
  q_id:any;

  constructor(private http: HttpClient, private router:Router) {
  }


  ngOnInit() {

    this.http.get('http://localhost:8080/getAnswers').subscribe(
      (resp) => {
        console.log(resp);
        this.answer = resp;
      },

      (err) => {
        console.log(err);
      }
    )





  }



  private deleteUrl = 'http://localhost:8080/deleteAnswers';


  deleteAnswers(a_id: any) {
    const deleteParams = {
      a_id: a_id
    };
    this.http.delete(this.deleteUrl, { params: deleteParams }).subscribe(
      (resp) => {
        console.log(resp);
        // remove the deleted answers from the answer array
        this.answer = this.answer.filter((question: any) => this.answer.a_id !== a_id);
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
