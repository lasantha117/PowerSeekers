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

  a_id: any;
  question_id: any;
  answer : any;
  jobPosition: any;
  marks: any;
  showScore = false;



  AnswerSubmit() {
    const url = 'http://localhost:8080/addAnswers';
    const data = {
      a_id: this.a_id,
      question_id: this.question_id,
      answer:this.answer,
      job_designation: this.jobPosition,
      marks:this.marks

    };


    this.http.post(url, data).subscribe(
      res => {
        console.log(res);
        alert('Answer saved successfully!');
      },
      err => {
        console.log(err);
        alert('Error saving question.');
      });



  }
  onJobPositionChange() {
    this.showScore = !!this.jobPosition;
  }


  constructor(private router: Router,private http: HttpClient) {
  }
}
