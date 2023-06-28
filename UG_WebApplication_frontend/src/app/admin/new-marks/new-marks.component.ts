import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-new-marks',
  templateUrl: './new-marks.component.html',
  styleUrls: ['./new-marks.component.css']
})
export class NewMarksComponent {
  marks_id  : any;
  a_id: any;
  job_title : any;
  marks:any;


  AnswerMarksubmit() {
    const url = 'http://localhost:8080/api/v1/auth/addAnswersmarks';
    const data = {
      marks_id: this.marks_id,
      a_id: this.a_id,
      job_title:this.job_title,
      marks:this.marks,
    };
    this.http.post(url, data).subscribe(
      res => {
        console.log(res);
        alert('Answer marks saved successfully!');
      },
      err => {
        console.log(err);
        alert('Error saving Answers marks');
      });
  }



  constructor(private router: Router, private http: HttpClient) {}

}
