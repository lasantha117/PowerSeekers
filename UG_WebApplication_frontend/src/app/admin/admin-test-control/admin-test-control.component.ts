import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-test-control',
  templateUrl: './admin-test-control.component.html',
  styleUrls: ['./admin-test-control.component.css']
})
export class AdminTestControlComponent {

  constructor(private router:Router) {
  }
}
