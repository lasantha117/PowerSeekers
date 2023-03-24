import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-psychometric-test',
  templateUrl: './psychometric-test.component.html',
  styleUrls: ['./psychometric-test.component.css']
})
export class PsychometricTestComponent {


  constructor(private router:Router) {

  }


  GoFirst(){
    this.router.navigate(['/first-question']);
  }



}


