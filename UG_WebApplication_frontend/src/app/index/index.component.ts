import {Router} from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private router:Router) {
  }

  indexBackground:string ="assets/img/index.jpg"
  BgSize:string="20px";

  GoHome(){
    this.router.navigate(['/home']);
  }





}
