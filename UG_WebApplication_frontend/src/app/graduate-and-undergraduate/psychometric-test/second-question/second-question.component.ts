import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.css']
})
export class SecondQuestionComponent  implements OnInit {

  questions: any;



  ngOnInit(): void {
    this.http.get('http://localhost:8080/UserQuestion').subscribe(data => {
      console.log(data);
    });
  }








  constructor(private http: HttpClient, private router:Router) { }


  }

















