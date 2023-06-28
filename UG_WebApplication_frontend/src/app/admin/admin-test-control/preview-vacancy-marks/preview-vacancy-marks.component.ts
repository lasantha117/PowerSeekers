import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-preview-vacancy-marks',
  templateUrl: './preview-vacancy-marks.component.html',
  styleUrls: ['./preview-vacancy-marks.component.css']
})
export class PreviewVacancyMarksComponent {


  marks:any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.http.get('http://localhost:8080/api/v1/auth/getAnswersmarks').subscribe(
      (resp) => {
        console.log(resp);
        this.marks = resp;
      },

      (err) => {
        console.log(err);
      }
    )
  }





  private deleteUrl = 'http://localhost:8080/deleteMarks';

  deleteMarks(marks_id: any) {
    const deleteParams = {
      marks_id: marks_id
    };
    this.http.delete(this.deleteUrl, { params: deleteParams }).subscribe(
      (resp) => {
        console.log(resp);
        // remove the deleted question from the questions array
        this.marks  = this.marks .filter((marks : any) => marks.marks_id !==marks_id);
      },
      (err) => {
        console.log(err);
      }
    );
  }



}
