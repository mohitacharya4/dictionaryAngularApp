import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { RestService } from './rest.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, PreloadAllModules} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ROUTES } from './app.routes';
import { LoginComponent } from './login/login.component';
import { AppState } from './app.service';
import { FrontPageComponent } from './front-page/front-page.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { QuestionpapersComponent } from './questionpapers/questionpapers.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {LightboxModule} from 'primeng/lightbox';
import 'hammerjs';
import { DownloadComponent } from './download/download.component';

// Application wide providers
const APP_PROVIDERS = [
  AuthService,
  RestService
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    FrontPageComponent,
    QuestionpapersComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MenubarModule,
    ButtonModule,
    TabViewModule,
    MatExpansionModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    TableModule,
    CardModule,
    LightboxModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [AuthService, RestService, AppState],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    public authService: AuthService,
    public restService: RestService,
  ) {
  }

}
