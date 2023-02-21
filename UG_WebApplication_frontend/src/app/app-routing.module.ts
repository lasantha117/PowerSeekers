import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StudentLoginComponent} from "./graduate-and-undergraduate/student-login/student-login.component";
import {CompanyLoginComponent} from "./company/company-login/company-login.component";
import {IndexComponent} from "./index/index.component";
import {PsychometricTestComponent} from "./graduate-and-undergraduate/psychometric-test/psychometric-test.component";
import {AdminDashboardComponent} from "./admin/admin-dashboard/admin-dashboard.component";
import {AdminTestControlComponent} from "./admin/admin-test-control/admin-test-control.component";
import {VacancyDisplayComponent} from "./vacancy-display/vacancy-display.component";
import {VacancyAddComponent} from "./vacancy-add/vacancy-add.component";
import {VacancyApplyFormComponent} from "./vacancy-apply-form/vacancy-apply-form.component";

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
    path:'psychometric-test',
    component:PsychometricTestComponent
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
    path: 'vacancy-display', component: VacancyDisplayComponent
  },
  {
    path: 'vacancy-add', component: VacancyAddComponent
  },
  {
    path: 'vacancy-apply-form', component: VacancyApplyFormComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
