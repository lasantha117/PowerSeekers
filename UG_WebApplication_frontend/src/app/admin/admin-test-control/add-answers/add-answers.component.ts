import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";




function upload(params: { ContentType: any; Bucket: string; ACL: string; Body: any; Key: string }, param2: (err: any, data: any) => void) {

}
@Component({
  selector: 'app-add-answers',
  templateUrl: './add-answers.component.html',
  styleUrls: ['./add-answers.component.css']
})
export class AddAnswersComponent {

  a_id  : any;
  q_id: any;
  answer : any;



  AnswerSubmit() {
    const url = 'http://localhost:8080/addAnswers';
    const data = {
      a_id: this.a_id,
      q_id: this.q_id,
      answer:this.answer,

    };




    this.http.post(url, data).subscribe(
      res => {
        console.log(res);
        alert('Answer saved successfully!');
      },
      err => {
        console.log(err);
        alert('Error saving Answers');
      });
  }



  getQid() {
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





  constructor(private router: Router, private http: HttpClient) {}

}
