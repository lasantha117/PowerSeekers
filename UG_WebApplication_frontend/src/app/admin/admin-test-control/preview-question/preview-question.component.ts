import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-preview-question',
  templateUrl: './preview-question.component.html',
  styleUrls: ['./preview-question.component.css']
})
export class PreviewQuestionComponent implements OnInit {
  question: any;
  editingQuestion: any;
  deleteConfirmation: boolean = false;
  q_id: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getQuestions();
  }

  private getQuestions() {
    this.http.get('http://localhost:8080/api/v1/auth/getQuestionAdmin').subscribe(
      (resp) => {
        console.log(resp);
        this.question = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private deleteUrl = 'http://localhost:8080/api/v1/auth/deleteQuestion';

  deleteQuestion() {
    const deleteParams = {
      q_id: this.q_id
    };

    this.http.delete(this.deleteUrl, { params: deleteParams }).subscribe(
      (resp) => {
        console.log(resp);
        // Remove the deleted question from the question array
        this.question = this.question.filter((question: any) => question.q_id !== this.q_id);
        this.deleteConfirmation = false; // Reset delete confirmation flag
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private updateUrl = 'http://localhost:8080/api/v1/auth/UpdateQuestions';

  updateQuestion() {
    const url = `${this.updateUrl}/${this.editingQuestion.q_id}`;

    this.http.put(url, this.editingQuestion).subscribe(
      (resp) => {
        console.log(resp);
        this.editingQuestion = null;
        this.getQuestions();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editQuestion(question: any) {
    this.editingQuestion = { ...question };
  }

  cancelEdit() {
    this.editingQuestion = null;
  }

  confirmDelete(q_id: any) {
    this.q_id = q_id;
    this.deleteConfirmation = true;
  }
}
