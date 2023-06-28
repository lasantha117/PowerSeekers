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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AddAnswersComponent } from './admin/admin-test-control/add-answers/add-answers.component';
import { PreviewQuestionComponent } from './admin/admin-test-control/preview-question/preview-question.component';
import { PreviewAnswersComponent } from './admin/admin-test-control/preview-answers/preview-answers.component';
import { FirstQuestionComponent } from './graduate-and-undergraduate/psychometric-test/first-question/first-question.component';
import { SecondQuestionComponent } from './graduate-and-undergraduate/psychometric-test/second-question/second-question.component';
import { ThirdQuestionComponent } from './graduate-and-undergraduate/psychometric-test/third-question/third-question.component';
import { FourthQuestionComponent } from './graduate-and-undergraduate/psychometric-test/fourth-question/fourth-question.component';
import { FifthQuestionComponent } from './graduate-and-undergraduate/psychometric-test/fifth-question/fifth-question.component';
import { SixthQuestionComponent } from './graduate-and-undergraduate/psychometric-test/sixth-question/sixth-question.component';
import { SeventhQuestionComponent } from './graduate-and-undergraduate/psychometric-test/seventh-question/seventh-question.component';
import { EighthQuestionComponent } from './graduate-and-undergraduate/psychometric-test/eighth-question/eighth-question.component';
import { NinthQuestionComponent } from './graduate-and-undergraduate/psychometric-test/ninth-question/ninth-question.component';
import { TenthQustionComponent } from './graduate-and-undergraduate/psychometric-test/tenth-question/tenth-qustion.component';
import { EleventhQuestionComponent } from './graduate-and-undergraduate/psychometric-test/eleventh-question/eleventh-question.component';
import { TwelfthQuestionComponent } from './graduate-and-undergraduate/psychometric-test/twelfth-question/twelfth-question.component';
import { ThirteenthQuestionComponent } from './graduate-and-undergraduate/psychometric-test/thirteenth-question/thirteenth-question.component';
import { FourteenthQuestionComponent } from './graduate-and-undergraduate/psychometric-test/fourteenth-question/fourteenth-question.component';
import { FifteenthQuestionComponent } from './graduate-and-undergraduate/psychometric-test/fifteenth-question/fifteenth-question.component';
import { SixteenthQuestionComponent } from './graduate-and-undergraduate/psychometric-test/sixteenth-question/sixteenth-question.component';
import { SeventeenthQuestionComponent } from './graduate-and-undergraduate/psychometric-test/seventeenth-question/seventeenth-question.component';
import { EighteenthQuestionComponent } from './graduate-and-undergraduate/psychometric-test/eighteenth-question/eighteenth-question.component';
import { NineteenthQuestionComponent } from './graduate-and-undergraduate/psychometric-test/nineteenth-question/nineteenth-question.component';
import { TwentiethQuestionComponent } from './graduate-and-undergraduate/psychometric-test/twentieth-question/twentieth-question.component';
import { ResultsComponent } from './graduate-and-undergraduate/psychometric-test/results/results.component';
import { AddMarksComponent } from './admin/admin-test-control/add-marks/add-marks.component';
import { PreviewVacancyMarksComponent } from './admin/admin-test-control/preview-vacancy-marks/preview-vacancy-marks.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminSignUpComponent } from './admin/admin-sign-up/admin-sign-up.component';
import { AddQuestionsComponent } from './admin/add-questions/add-questions.component';
import { NewMarksComponent } from './admin/new-marks/new-marks.component';
import { StudentSignupComponent } from './graduate-and-undergraduate/student-signup/student-signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { DialogComponent } from './dialog/dialog.component';
import { RulesComponent } from './graduate-and-undergraduate/psychometric-test/rules/rules.component';
import { ForgotPasswordComponent } from './admin/admin-login/forgot-password/forgot-password.component';
import { SettingsComponent } from './admin/settings/settings.component';






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
    PreviewQuestionComponent,
    PreviewAnswersComponent,
    FirstQuestionComponent,
    SecondQuestionComponent,
    ThirdQuestionComponent,
    FourthQuestionComponent,
    FifthQuestionComponent,
    SixthQuestionComponent,
    SeventhQuestionComponent,
    EighthQuestionComponent,
    NinthQuestionComponent,
    TenthQustionComponent,
    EleventhQuestionComponent,
    TwelfthQuestionComponent,
    ThirteenthQuestionComponent,
    FourteenthQuestionComponent,
    FifteenthQuestionComponent,
    SixteenthQuestionComponent,
    SeventeenthQuestionComponent,
    EighteenthQuestionComponent,
    NineteenthQuestionComponent,
    TwentiethQuestionComponent,
    ResultsComponent,
    AddMarksComponent,
    PreviewVacancyMarksComponent,
    AdminLoginComponent,
    AdminSignUpComponent,
    AddQuestionsComponent,
    NewMarksComponent,
    StudentSignupComponent,
    DialogComponent,
    RulesComponent,
    ForgotPasswordComponent,
    SettingsComponent,



  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSnackBarModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

