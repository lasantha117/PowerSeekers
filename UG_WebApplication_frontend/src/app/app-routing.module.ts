import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StudentLoginComponent} from "./graduate-and-undergraduate/student-login/student-login.component";
import {CompanyLoginComponent} from "./company/company-login/company-login.component";
import {IndexComponent} from "./index/index.component";

import {AdminDashboardComponent} from "./admin/admin-dashboard/admin-dashboard.component";
import {AdminTestControlComponent} from "./admin/admin-test-control/admin-test-control.component";
import {AddAnswersComponent} from "./admin/admin-test-control/add-answers/add-answers.component";
import {VacancyDisplayComponent} from "./vacancy-display/vacancy-display.component";
import {VacancyAddComponent} from "./vacancy-add/vacancy-add.component";
import {PreviewQuestionComponent} from "./admin/admin-test-control/preview-question/preview-question.component";
import {PreviewAnswersComponent} from "./admin/admin-test-control/preview-answers/preview-answers.component";
import {PsychometricTestComponent} from "./graduate-and-undergraduate/psychometric-test/psychometric-test.component";


const routes: Routes = [
  {
    path: '', component: IndexComponent
  },

  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'index', component: IndexComponent
  },

  {
    path:'student-login',
    component:StudentLoginComponent
  },
  {
    path:'company-login',
    component:CompanyLoginComponent
  },


  {
    path:'admin-dashboard',
    component:AdminDashboardComponent
  },

  {
    path:'admin-test-control',
    component:AdminTestControlComponent
  },
  {
    path:'add-answers',
    component:AddAnswersComponent
  },

  {
    path:'vacancy-display',
    component:VacancyDisplayComponent
  },

  {
    path:'vacancy-add',
    component:VacancyAddComponent
  },

  {
    path:'preview-question',
   component:PreviewQuestionComponent
  },

  {
    path:'preview-answers',
    component:PreviewAnswersComponent
  },

  {
    path:'psychometric-test',
    component:PsychometricTestComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
