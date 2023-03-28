import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sixteenth-question',
  templateUrl: './sixteenth-question.component.html',
  styleUrls: ['./sixteenth-question.component.css']
})
export class SixteenthQuestionComponent implements OnInit {
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


    this.router.navigate(['/seventeenth-question']);

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
