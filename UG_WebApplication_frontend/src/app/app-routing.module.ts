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
import {
  FirstQuestionComponent
} from "./graduate-and-undergraduate/psychometric-test/first-question/first-question.component";
import {
  SecondQuestionComponent
} from "./graduate-and-undergraduate/psychometric-test/second-question/second-question.component";
import {
  FourthQuestionComponent
} from "./graduate-and-undergraduate/psychometric-test/fourth-question/fourth-question.component";
import {
  ThirdQuestionComponent
} from "./graduate-and-undergraduate/psychometric-test/third-question/third-question.component";
import {
  FifthQuestionComponent
} from "./graduate-and-undergraduate/psychometric-test/fifth-question/fifth-question.component";
import {
  SixthQuestionComponent
} from "./graduate-and-undergraduate/psychometric-test/sixth-question/sixth-question.component";
import {
  SeventhQuestionComponent
} from "./graduate-and-undergraduate/psychometric-test/seventh-question/seventh-question.component";
import {
  EighthQuestionComponent
} from "./graduate-and-undergraduate/psychometric-test/eighth-question/eighth-question.component";
import {
  NinthQuestionComponent
} from "./graduate-and-undergraduate/psychometric-test/ninth-question/ninth-question.component";
import {
  TenthQustionComponent
} from "./graduate-and-undergraduate/psychometric-test/tenth-question/tenth-qustion.component";
import {
  EleventhQuestionComponent
} from "./graduate-and-undergraduate/psychometric-test/eleventh-question/eleventh-question.component";
import {
  TwelfthQuestionComponent
} from "./graduate-and-undergraduate/psychometric-test/twelfth-question/twelfth-question.component";
import {
  NineteenthQuestionComponent
} from "./graduate-and-undergraduate/psychometric-test/nineteenth-question/nineteenth-question.component";
import {ResultsComponent} from "./graduate-and-undergraduate/psychometric-test/results/results.component";
import {
  PreviewVacancyMarksComponent
} from "./admin/admin-test-control/preview-vacancy-marks/preview-vacancy-marks.component";
import {AdminLoginComponent} from "./admin/admin-login/admin-login.component";


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
  },

  {
    path:'first-question',
    component:FirstQuestionComponent
  },

  {
    path:'second-question',
    component:SecondQuestionComponent
  },

  {
    path:'third-question',
    component:ThirdQuestionComponent
  },

  {
    path:'fourth-question',
    component:FourthQuestionComponent
  },

  {
    path:'fifth-question',
    component:FifthQuestionComponent
  },

  {
    path:'sixth-question',
      component:SixthQuestionComponent
  },

  {
    path:'seventh-question',
    component:SeventhQuestionComponent
  },

  {
    path:'eighth-question',
      component:EighthQuestionComponent
  },

  {
    path:'ninth-question',
      component:NinthQuestionComponent
  },

  {
    path:'tenth-question',
    component:TenthQustionComponent
  },

  {
    path:'eleventh-question',
    component:EleventhQuestionComponent
  },

  {
    path:'twelfth-question',
    component:TwelfthQuestionComponent
  },

  {
    path:'thirteenth-question',
    component:ThirdQuestionComponent
  },

  {
    path:'fourteenth-question',
    component:FourthQuestionComponent
  },

  {
    path:'fifteenth-question',
      component:FifthQuestionComponent
  },

  {
    path:'sixteenth-question',
    component:SixthQuestionComponent
  },
  {
    path:'seventeenth-question',
      component:SeventhQuestionComponent
  },

  {
    path:'eighteenth-question',
    component:EighthQuestionComponent
  },

  {
    path:'nineteenth-question',
    component:NineteenthQuestionComponent
  },

  {
    path:'twentieth-question',
    component:TwelfthQuestionComponent
  },

  {
    path:'results',
    component:ResultsComponent
  },

  {
    path:'preview-vacancy-marks',
    component:PreviewVacancyMarksComponent
  },

  {
    path:'admin-login',
    component:AdminLoginComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
