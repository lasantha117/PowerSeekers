import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {any} from "underscore/index";
import {HttpClient} from "@angular/common/http";



function upload(params: { ContentType: any; Bucket: string; ACL: string; Body: any; Key: string }, param2: (err: any, data: any) => void) {

}

@Component({
  selector: 'app-admin-test-control',
  templateUrl: './admin-test-control.component.html',
  styleUrls: ['./admin-test-control.component.css'],




})
export class AdminTestControlComponent {


  private url: any;
  q_id: any;
  q_type: any;
  selectedUniversity: any;
  selectedDegree: any;
  thequestion:any;



  onSubmit() {
    const url = 'http://localhost:8080/addQuestion';
    const data = {
      q_id: this.q_id,
      q_type: this.q_type,
      university: this.selectedUniversity,
      degree: this.selectedDegree,
      thequestion: this.thequestion,
    };

    this.http.post(url, data).subscribe(
      res => {
        console.log(res);
        alert('Question saved successfully!');
      },
      err => {
        console.log(err);
        alert('Error saving question.');
      });


  }






  constructor(private router: Router,private http: HttpClient) {
  }}















