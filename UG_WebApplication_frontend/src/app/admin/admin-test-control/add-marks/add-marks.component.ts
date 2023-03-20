import { Component } from '@angular/core';

import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
function upload(params: { ContentType: any; Bucket: string; ACL: string; Body: any; Key: string }, param2: (err: any, data: any) => void) {

}
@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.css']
})
export class AddMarksComponent {


  a_id  : any;

  marks_id: any;
  answer : any;
  job_title: any;
  marks: any;
  showScore = false;


  AnswerSubmit() {
    const url = 'http://localhost:8080/addAnswersmarks';
    const data = {
      a_id: this.a_id,

      marks_id:this.marks_id,
      answer:this.answer,
      job_title: this.job_title,
      marks:this.marks

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

  onJobPositionChange() {
    this.showScore = !!this.job_title;
  }

  getQid() {
    this.http.get('http://localhost:8080/getAnswersmarks').subscribe(
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
