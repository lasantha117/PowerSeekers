import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-vacancy-display',
  templateUrl: './vacancy-display.component.html',
  styleUrls: ['./vacancy-display.component.css']
})
export class VacancyDisplayComponent {
 constructor(private router:Router) {
 }
}
