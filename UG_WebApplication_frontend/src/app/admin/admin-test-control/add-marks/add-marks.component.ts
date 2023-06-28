import { Component } from '@angular/core';

import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
function upload(params: { ContentType: any; Bucket: string; ACL: string; Body: any; Key: string }, param2: (err: any, data: any) => void) {

}


@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.css']
})
export class AddMarksComponent {





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
        this.snackBar.open('Answer Added Successfully','Close', { duration: 7000 });
      },
      err => {
        console.log(err);
        this.snackBar.open('Something went wrong', 'Close', { duration: 7000 });
      }
    );
  }


  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}


}
