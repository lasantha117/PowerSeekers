import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-eighteenth-question',
  templateUrl: './eighteenth-question.component.html',
  styleUrls: ['./eighteenth-question.component.css']
})
export class EighteenthQuestionComponent {



  GoNineteenth(){
    this.router.navigate(['/nineteenth-question']);
  }



  constructor(private router: Router,private http: HttpClient) {
  }

}
