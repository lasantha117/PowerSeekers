import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-twentieth-question',
  templateUrl: './twentieth-question.component.html',
  styleUrls: ['./twentieth-question.component.css']
})
export class TwentiethQuestionComponent implements OnInit {
  question: any;
  answers: any;
  selectedAnswer:any;
  answerSelected:any = false;

  isButtonDisabled = false;
  jobTitles: string[] = [];
  email: any;
  isLoading: boolean = true;



  ngOnInit() {
    this.isLoading = true; // Set isLoading to true before making API requests

    this.http.get('http://localhost:8080/api/v1/auth/getQuestionForUser').subscribe((questionData: any) => {
      this.question = questionData;

      this.http.get('http://localhost:8080/api/v1/auth/getAnswers').subscribe((answersData: any) => {
        this.answers = answersData.filter((answer: any) => answer.q_id === this.question.q_id);

        this.isLoading = false; // Set isLoading to false when responses are received
      });
    });
  }


  onSubmit() {
    const data = {
      a_id: this.selectedAnswer,
      email: localStorage.getItem('email') // Get the stored email from local storage
    };
    this.http.post('http://localhost:8080/api/v1/auth/saveAnswer', data).subscribe(() => {
      // alert('Answer saved successfully!');
    });



  }

  results(){


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


  calculateTotalMarks(): void {


    const apiUrl = 'http://localhost:8080/api/v1/auth/total-marks';

    // Create an HttpParams object and set the 'email' parameter
    const params = new HttpParams().set('email', this.email);

    // Pass the 'params' object as the second argument in the request
    this.http.post(apiUrl, null, { params }).subscribe(
      response => {
        console.log('Total marks calculated and saved successfully.');
      },
      error => {
        console.log('Error occurred during the calculation and saving of total marks:', error);
      }
    );
    this.isButtonDisabled = true;
    this.router.navigate(['/results']);


  }





  constructor(private router:Router,private http: HttpClient) {
    this.email = localStorage.getItem('email');
  }

}
