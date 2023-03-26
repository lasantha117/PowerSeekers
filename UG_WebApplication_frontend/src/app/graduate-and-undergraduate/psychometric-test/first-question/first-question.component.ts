import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuestionService} from "../../../question.service";


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.css']
})
export class FirstQuestionComponent implements OnInit {


  question: any;
  answers: any;
  selectedAnswer:any;
  answerSelected:any = false;

  ngOnInit() {
    this.http.get('http://localhost:8080/getQuestionForUser').subscribe((questionData: any) => {
      this.question = questionData;

      this.http.get('http://localhost:8080/getAnswers').subscribe((answersData: any) => {
        this.answers = answersData.filter((answer: any) => answer.q_id === this.question.q_id);
      });
    });
  }


  onSubmit() {
    const data = {

      a_id: this.selectedAnswer
    };

    this.http.post('http://localhost:8080/saveAnswer', data).subscribe(() => {
      // alert('Answer saved successfully!');
    });


      this.router.navigate(['/second-question']);

  }


  popupOpen = false;

  openPopup() {
    this.popupOpen = true;
    document.body.classList.add('no-scroll');
  }

  closePopup() {
    this.popupOpen = false;
    document.body.classList.remove('no-scroll');
  }

  goDashboard() {
    // add your function to navigate to the dashboard here
  }




  constructor(private router: Router,private http: HttpClient) {
  }


}
