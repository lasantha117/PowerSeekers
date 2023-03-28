import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-vacancy-add',
  templateUrl: './vacancy-add.component.html',
  styleUrls: ['./vacancy-add.component.css']
})
export class VacancyAddComponent {


  vacancy: any = {};



  ngOnInit() {
    // Call the Spring Boot API to save a new vacancy
    const url = 'http://localhost:8080/addVacancy';
    const body = JSON.stringify(this.vacancy);
    const headers = { 'Content-Type': 'application/json' };
    this.http.post<any>(url, body, { headers }).subscribe(
      data => {
        console.log(data); // Log the response from the API
        this.vacancy = data; // Assign the response to the vacancy object
      },
      error => {
        console.error(error); // Log any errors that occur
      }
    );
  }





  constructor(private router: Router, private http: HttpClient) {}

}
