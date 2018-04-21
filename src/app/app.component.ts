import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LoginComponent } from './features/auth/login/login.component';
import {views} from './nav-views';
import { MOBILE } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  mobile = MOBILE;
  sideNavMode = MOBILE ? 'over' : 'side';
  views = views;

  constructor(public dialog: MatDialog) {}

  login() {
    this.dialog.open(LoginComponent, {
    });
  }

}
