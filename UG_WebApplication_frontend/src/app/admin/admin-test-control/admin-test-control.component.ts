import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-admin-test-control',
  templateUrl: './admin-test-control.component.html',
  styleUrls: ['./admin-test-control.component.css'],
})
export class AdminTestControlComponent {
  showPreviewQuestion = false;
  showPreviewAnswers = false;
  PreviewVacancyMarks = false;
  target_jp: any;
  q_id: any;
  q_type: any;
  selectedUniversity: any;
  selectedDegree: any;
  thequestion: any;

  jobOptions: any[] = [{ job_title: '', marks: '' }];
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

  constructor(private router: Router, private http: HttpClient, private snackBar: MatSnackBar) {}


  onSubmit() {
    const url = 'http://localhost:8080/api/v1/auth/addQuestion';
    const data = {
      q_id: this.q_id,
      q_type: this.q_type,
      university: this.selectedUniversity,
      degree: this.selectedDegree,
      thequestion: this.thequestion,
      target_jp: this.target_jp
    };

    this.http.post(url, data).subscribe(
      res => {
        console.log(res);
        this.snackBar.open('Question Added Successfully','Close', { duration: 7000 });
      },
      err => {
        console.log(err);
        this.snackBar.open('Something went wrong', 'Close', { duration: 7000 });
      }
    );
  }


  togglePreviewQuestion() {
    this.showPreviewQuestion = !this.showPreviewQuestion;
  }

  togglePreviewAnswers() {
    this.showPreviewAnswers = !this.showPreviewAnswers;
  }

  togglePreviewVacancyMarks() {
    this.PreviewVacancyMarks = !this.PreviewVacancyMarks;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/admin-login']);
  }
}
