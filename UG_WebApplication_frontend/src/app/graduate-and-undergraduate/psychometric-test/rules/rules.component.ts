import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {
  isSymbolRotated = false;
  isLoading: boolean = true;


  constructor(private router:Router) {

  }

  GoFirst(){
    this.router.navigate(['/first-question']);
  }


  GoBack(){
    this.router.navigate(['/psychometric-test']);
  }

  ngOnInit() {

    this.isLoading = true;

    // Simulate loading delay of 2 seconds
    setTimeout(() => {
      this.isLoading = false; // Set isLoading to false when responses are received
    }, 2000);

  }


}
