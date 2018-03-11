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
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [AuthService, RestService, AppState],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    public authService: AuthService,
    public restService: RestService,
  ) {}

}
