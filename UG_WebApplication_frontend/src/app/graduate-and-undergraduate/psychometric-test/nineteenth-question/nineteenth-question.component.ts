import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-nineteenth-question',
  templateUrl: './nineteenth-question.component.html',
  styleUrls: ['./nineteenth-question.component.css']
})
export class NineteenthQuestionComponent {

  GoTwentieth(){
    this.router.navigate(['/twentieth-question']);
  }




  constructor(private router: Router,private http: HttpClient) {
  }

}
