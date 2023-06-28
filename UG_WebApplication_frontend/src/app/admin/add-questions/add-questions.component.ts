import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent {
  q_id: any;
  selectedUniversity: any;
  selectedDegree: any;
  thequestion: any;
  target_jp: any;
  answer: any;
  a_id: any;
  job_title : any;
  marks:any;
  jobOptions: any[] = [{ job_title: '', marks: '' }, { job_title: '', marks: '' }, { job_title: '', marks: '' },{ job_title: '', marks: '' }]; // Modify the number of jobOptions as per your requirement
  jobTitles: string[] = [
    'Software Developer',
    'Technical Support Engineer',
    'Quality Assurance Analyst',
    'Network Administrator',
    'Front-End Web Developer',
    'UX Designer',
    'Mobile Application Developer',
    'Game Developer',
    'Game Designer',
    'Graphic Designer',
    'Web Designer'
  ];

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    const baseUrl = 'http://localhost:8080/api/v1/auth/';
    const addQuestionUrl = baseUrl + 'addQuestion';
    const data = {
      q_id: this.q_id,
      university: this.selectedUniversity,
      degree: this.selectedDegree,
      thequestion: this.thequestion,
      target_jp: this.target_jp,
    };

    this.http.post(addQuestionUrl, data).subscribe(
      (res) => {
        console.log(res);
        alert('Question saved successfully!');
      },
      (err) => {
        console.log(err);
        alert('Error saving question.');
      }
    );
  }

  AnswerSubmit() {
    const baseUrl = 'http://localhost:8080/api/v1/auth/';
    const addAnswersUrl = baseUrl + 'addAnswers';
    const data = {
      q_id: this.q_id,
      answer: this.answer,
    };

    this.http.post(addAnswersUrl, data).subscribe(
      (res) => {
        console.log(res);
        // Handle the response as needed
      },
      (err) => {
        console.log(err);
        // Handle the error as needed
      }
    );
  }
}
