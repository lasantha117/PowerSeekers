import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StudentLoginComponent} from "./graduate-and-undergraduate/student-login/student-login.component";
import {CompanyLoginComponent} from "./company/company-login/company-login.component";
import {IndexComponent} from "./index/index.component";
import {PsychometricTestComponent} from "./graduate-and-undergraduate/psychometric-test/psychometric-test.component";
import {AdminDashboardComponent} from "./admin/admin-dashboard/admin-dashboard.component";
import {AdminTestControlComponent} from "./admin/admin-test-control/admin-test-control.component";


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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
