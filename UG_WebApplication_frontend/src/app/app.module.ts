import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyLoginComponent } from './company/company-login/company-login.component';
import { StudentLoginComponent } from './graduate-and-undergraduate/student-login/student-login.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { GraduateAndUndergraduateComponent } from './graduate-and-undergraduate/graduate-and-undergraduate.component';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';
import { PsychometricTestComponent } from './graduate-and-undergraduate/psychometric-test/psychometric-test.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminTestControlComponent } from './admin/admin-test-control/admin-test-control.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AddAnswersComponent } from './admin/admin-test-control/add-answers/add-answers.component';




@NgModule({


declarations: [
    AppComponent,
    CompanyLoginComponent,
    StudentLoginComponent,
    HomeComponent,
    CompanyComponent,
    GraduateAndUndergraduateComponent,
    AdminComponent,
    IndexComponent,
    PsychometricTestComponent,
    AdminDashboardComponent,
    AdminTestControlComponent,
    AppComponent,
    AddAnswersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

