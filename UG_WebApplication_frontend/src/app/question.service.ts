import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {object} from "underscore";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = 'http://localhost:8080/getQuestions';



  constructor(private http: HttpClient) { }

  getQuestionById(qId: string) {
    const url = `${this.apiUrl}/${qId}`;
    return this.http.get<any>(url);
  }



}
