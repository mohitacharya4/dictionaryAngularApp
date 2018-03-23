/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AppState } from './app.service';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app-first',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
})
export class AppComponent implements OnInit {
  public name = 'Physical Education Vocabulary';
  public url = 'https://twitter.com/AngularClass';
  items: MenuItem[];

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    this.items = [
      {
          label: 'Physical Education Terminology',
          icon: 'fa fa-book',
          routerLink: ['/frontpage']          
      },
      {
          label: 'Previous Year UGC Net papers with solutions',
          icon: 'fa-newspaper-o',
          routerLink: ['/questionpapers']
      },
      {
        label: 'Download the App from playstore',
        icon: 'fa fa-download',
        routerLink: ['/downloadpage']
    }
  ];
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
