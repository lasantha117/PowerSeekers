import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-vacancy-apply-form',
  templateUrl: './vacancy-apply-form.component.html',
  styleUrls: ['./vacancy-apply-form.component.css']
})
export class VacancyApplyFormComponent {
  constructor(private router:Router) {
  }

}
