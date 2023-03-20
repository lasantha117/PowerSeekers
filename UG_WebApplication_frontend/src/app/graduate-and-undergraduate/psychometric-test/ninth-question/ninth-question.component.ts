import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ninth-question',
  templateUrl: './ninth-question.component.html',
  styleUrls: ['./ninth-question.component.css']
})
export class NinthQuestionComponent {


  GoTenth(){
    this.router.navigate(['/tenth-question']);
  }



  constructor(private router: Router,private http: HttpClient) {
  }


}
