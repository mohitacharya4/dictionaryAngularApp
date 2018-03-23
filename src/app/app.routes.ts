import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { QuestionpapersComponent } from './questionpapers/questionpapers.component';
import { DownloadComponent } from './download/download.component';

export const ROUTES: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'frontpage', component: FrontPageComponent},
  { path: 'questionpapers', component: QuestionpapersComponent},
  { path: 'downloadpage', component: DownloadComponent}
];
