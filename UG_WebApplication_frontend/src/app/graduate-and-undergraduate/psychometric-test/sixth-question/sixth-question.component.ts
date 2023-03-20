import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sixth-question',
  templateUrl: './sixth-question.component.html',
  styleUrls: ['./sixth-question.component.css']
})
export class SixthQuestionComponent {


  GoSeven(){
    this.router.navigate(['/seventh-question']);
  }


  constructor(private router: Router,private http: HttpClient) {
  }


}
